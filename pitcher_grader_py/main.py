#This file contains the main functions to interact with the base_metrics.json file as well as grade pitches based on the metrics
import json
import grade
import tkinter as tk
from tkinter import ttk, messagebox

def save_base_metrics(filename, base_metrics):
    with open(filename, 'w') as file:
        json.dump(base_metrics, file, indent = 4)

def load_base_metrics(filename):
    try:
        # Attempt to load base_metrics from a file
        with open(filename, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        # Handle the case where the file is not found
        messagebox.showerror("Error", "Could not find base_metrics.json.")
        return {}
    except json.JSONDecodeError:
        # Handle the case where there's an issue decoding the JSON file
        messagebox.showerror("Error", "Invalid JSON format in base_metrics.json.")
        return {}
    
    

    
#Get the name of the metric based on its position in the order of the json file. Helper function
def get_metric_type(index):
    if index > 6 or index < 0:
        return ""
    
    metric_types = ["velocity", "induced_vertical_break", "horizontal_break", "spin_rate", "release_height",
                    "extension", "vertical_approach_angle"]

    return metric_types[index]

#Given identifiers this function changes the value of the current base_metrics.
#The changes have to be SAVED in order for the change to persist.
#Main interface to update metrics
def update_base_metrics(base_metrics, pitch_type, metric_category, metric_name, new_value):
    try:
        # Check if the specified pitch type exists in base_metrics
        pitch_data = base_metrics[pitch_type]
    except KeyError:
        print(f"Error: Pitch type '{pitch_type}' not found in base_metrics.")
        return

    try:
        # Check if the specified metric category exists for the pitch type
        metric_data = pitch_data[metric_category]
    except KeyError:
        print(f"Error: Metric category '{metric_category}' not found for pitch type '{pitch_type}'.")
        return

    try:
        # Update the specified metric with the new value
        if metric_name == 'goal':
            metric_data[metric_name] = new_value
        else:
            try:
                metric_data[metric_name] = float(new_value)
            except ValueError as e:
                print(f"Error: {e}")
                return
    except KeyError:
        print(f"Error: Metric '{metric_name}' not found in category '{metric_category}' for pitch type '{pitch_type}'.")
        return

    print(f"Updated {pitch_type} - {metric_category} - {metric_name} to {base_metrics[pitch_type][metric_category][metric_name]}")
        
    
    

#In this context this function is useful to change scores to be based on a score out of 200 rather than 10.
def change_scale(old_scale: int, new_scale: int, value: int) -> int:
    normalized_value = value / float(old_scale)

    return round(normalized_value * new_scale)       
    
#General-use interface for functions in the grade.py file. Helper function for grade_pitch()
def grade_command(command: str, *args) -> float:
    if command.lower() == "min":
        if len(args) != 4:
            print("Invalid number of arguments")
            return -1
        else:
            for arg in args:
                if not isinstance(arg, (int, float)):
                    print("Argument is not a number")
                    return -1
            return grade.grade_min(args[0], args[1], args[2], args[3])
    elif command.lower() == "max":
        if len(args) != 4:
            print("Invalid number of arguments")
            return -1
        else:
            for arg in args:
                if not isinstance(arg, (int, float)):
                    print("Argument is not a number")
                    return -1
            return grade.grade_max(args[0], args[1], args[2], args[3])
    elif command.lower() == "target":
        if len(args) != 5:
            print("Invalid number of arguments " + str(args))
            return -1
        else:
            for arg in args:
                if not isinstance(arg, (int, float)):
                    print("Argument is not a number")
                    return -1
            return grade.grade_target(args[0], args[1], args[2], args[3], args[4])
    elif command.lower() == "edge":
        if len(args) != 5:
            print("Invalid number of arguments")
            return -1
        else:
            for arg in args:
                if not isinstance(arg, (int, float)):
                    print("Argument is not a number")
                    return -1
            return grade.grade_edge(args[0], args[1], args[2], args[3], args[4])
    elif command.lower() == "none":
        if len(args) != 1:
            print("Invalid number of arguments")
            return -1
        else:
            for arg in args:
                if not isinstance(arg, (int, float)):
                    print("Argument is not a number")
                    return -1
            return grade.grade_min(args[0])
    else:
        print("grade_command(): Invalid command")
        return -1
    
#Given a base pitch dictionary called "pitch" it will calculate the grade of the pitch from the base metrics.
#Order of arguments: velocity, ivBreak, hBreak, spinRate, relHeight, extension, vAppAngle
#Use this as the main interface to grade pitches
def grade_pitch(base_metrics, pitch_type, scale, *args):
    try:
        base_pitch = base_metrics[pitch_type]
    except KeyError:
        print(f"Error: Pitch type '{pitch_type}' not found in base_metrics.")
        return -1
    if len(args) != 7:
        print("grade_pitch() usage: base_pitc, scale, velocity, ivBreak, hBreak, spinRate, relHeight, extension, vAppAngle")
        return -1
    weighted_total_score = 0
    weight = 0
    index = 0
    metric = ""
    command = ""
    while index < 7:
        metric = get_metric_type(index)
        command = base_pitch["goal"][metric].lower()
        if command == "min" or command == "max":
            weighted_total_score = weighted_total_score + (grade_command(command, base_pitch["min"][metric], base_pitch["max"][metric], args[index], scale) * base_pitch["weight"][metric])
            weight = weight + base_pitch["weight"][metric]
        elif command == "target" or command == "edge":
            weighted_total_score = weighted_total_score + (grade_command(command, base_pitch["min"][metric], base_pitch["max"][metric], base_pitch["target"][metric], args[index], scale) * base_pitch["weight"][metric])
            weight = weight + base_pitch["weight"][metric]
        elif command == "none":
            weighted_total_score = weighted_total_score + (grade_command(command, scale) * base_pitch["weight"][metric])
            weight = weight + base_pitch["weight"][metric]
        else:
            print("grade_pitch(): Improper goal in base_metrics.json")
            return -1
        index = index + 1

    return weighted_total_score / weight   

def grade_metrics(base_metrics, pitch_type, scale, *args):
    try:
        base_pitch = base_metrics[pitch_type]
    except KeyError:
        print(f"Error: Pitch type '{pitch_type}' not found in base_metrics.")
        return -1
    if len(args) != 7:
        print("grade_pitch() usage: base_pitc, scale, velocity, ivBreak, hBreak, spinRate, relHeight, extension, vAppAngle")
        return -1
    grades = []

    index = 0
    while index < 7:
        metric = get_metric_type(index)
        command = base_pitch["goal"][metric].lower()
        if command == "min" or command == "max":
            grades.append(grade_command(command, base_pitch["min"][metric], base_pitch["max"][metric], args[index], scale))
        elif command == "target" or command == "edge":
            grades.append(grade_command(command, base_pitch["min"][metric], base_pitch["max"][metric], base_pitch["target"][metric], args[index], scale))
        elif command == "none":
            grades.append(grade_command(command, scale))
        else:
            print("grade_pitch(): Improper goal in base_metrics.json")
            return -1
        index = index + 1
        
    return grades

class PitchGradeApp:
    def __init__(self, root):
        self.root = root
        self.root.title = "Pitch Grading App"
        self.base_metrics = self.load_base_metrics_from_file()
        self.list_of_pitches = list(self.base_metrics.keys())
        self.list_of_categories = list(self.base_metrics[self.list_of_pitches[0]])
        self.list_of_metric_names = list(self.base_metrics[self.list_of_pitches[0]][self.list_of_categories[0]])
        self.pitches = ["4S_Fastball", "2S_Fastball", "SI_Fastball", "CT_Fastball", "Cutter", "Gyro_Slider", "Slider",
                        "Slutter", "Sweeper", "Slurve", "12_6", "Traditional_CH", "Sidespin_CH", "Splitter"]
        self.pitch_forms = [] #All the forms for the pitches a pitcher throws. Will be used in screen2
        self.screen1()

    # Function to load base metrics from file
    def load_base_metrics_from_file(self):
        try:
            # Attempt to load base_metrics from a file
            base_metrics = load_base_metrics('base_metrics.json')
            return base_metrics
        except FileNotFoundError:
            # Handle the case where the file is not found
            messagebox.showerror("Error", "Could not find base_metrics.json.")
            return {}
        except json.JSONDecodeError:
            # Handle the case where there's an issue decoding the JSON file
            messagebox.showerror("Error", "Invalid JSON format in base_metrics.json.")
            return {}
        
    def get_pitch_names(self, indices):
        result = []
        for index in indices:
            result.append(self.pitches[index])
        return result
        
    def screen1(self):
        self.frame1 = ttk.Frame(self.root)
        self.frame1.grid(row=0, column=0, padx=10, pady=10)

        hand_label = ttk.Label(self.frame1, text="Pitching Hand: ")
        hand_label.grid(row=0, column=0, pady=10)
        combobox1 = ttk.Combobox(self.frame1, value = ["RH", "LH"])
        combobox1.grid(row=0, column=1, pady=5)

        pitch_choices_label = ttk.Label(self.frame1, text="Pitches: ")
        pitch_choices_label.grid(row=1, column=0, pady=10)
        
        pitch_listbox = tk.Listbox(self.frame1, selectmode=tk.MULTIPLE)
        for pitch in self.pitches:
            pitch_listbox.insert(tk.END, pitch)
        pitch_listbox.grid(row = 1, column = 1, padx=10, pady=10)

        next_page_button = ttk.Button(self.frame1, text="Submit", command=lambda: 
            self.screen1_to_screen2(combobox1.get(), self.get_pitch_names(list(pitch_listbox.curselection()))))
        next_page_button.grid(row = 0, column = 4, padx=10, pady=10)

    def screen1_to_screen2(self, hand, pitches):
        if pitches == [] or hand == "":
            print("Hand and at least one pitch needs to be selected")
            self.frame1.destroy()
            self.screen1()
            return
        choices = []
        for pitch in pitches:
            choices.append(hand + "_" + pitch)
        self.frame1.destroy()
        self.screen2(choices)

    def submit_forms(self, pitch_choices):
        results = []
        form_count = 0
        total = 0
        for form in self.pitch_forms:
            form_count = form_count + 1
            widgets = form.winfo_children()
            results.append(int(grade_pitch(self.base_metrics, pitch_choices[form_count - 1], 200, float(widgets[2].get()), 
                                                                float(widgets[4].get()), float(widgets[6].get()), 
                                                                float(widgets[8].get()), float(widgets[10].get()), float(widgets[12].get()), 
                                                                float(widgets[14].get()))))
        for score in results:
            total = total + score
        average = total / form_count
        results.append(int(average))
        return results
    
    def restart(self):
        for widget in self.frame2.winfo_children():
            widget.destroy()
        self.frame2.destroy()
        self.pitch_forms = []
        self.screen1()

    def screen2(self, pitch_choices):
        
        self.frame2 = ttk.Frame(self.root)
        self.frame2.grid(row=0, column=0, padx=10, pady=10)

        self.pitch_forms = []
        index = 0
        results_text = tk.StringVar()
        results_text.set("Scores: ")
        while index < len(pitch_choices): #The structure of the forms is important for submit_forms. It needs to know the indexes of the entries.
            self.pitch_forms.append(ttk.Frame(self.frame2))
            pitch_label = ttk.Label(self.pitch_forms[index], text = pitch_choices[index])
            velocity_label = ttk.Label(self.pitch_forms[index], text="Velocity:")
            velocity_entry = ttk.Entry(self.pitch_forms[index])#Index = 2

            induced_vertical_break_label = ttk.Label(self.pitch_forms[index], text="Ind. Vert Break:")
            induced_vertical_break_entry = ttk.Entry(self.pitch_forms[index]) #Index = 4
            
            horizontal_break_label = ttk.Label(self.pitch_forms[index], text="Horz Break:")
            horizontal_break_entry = ttk.Entry(self.pitch_forms[index])#Index = 6

            spin_rate_label = ttk.Label(self.pitch_forms[index], text="Spin Rate:")
            spin_rate_entry = ttk.Entry(self.pitch_forms[index])#Index = 8

            release_height_label = ttk.Label(self.pitch_forms[index], text="Rel Height:")
            release_height_entry = ttk.Entry(self.pitch_forms[index])#Index = 10

            extension_label = ttk.Label(self.pitch_forms[index], text="Extension:")
            extension_entry = ttk.Entry(self.pitch_forms[index])#Index = 12

            vertical_approach_angle_label = ttk.Label(self.pitch_forms[index], text="Vert App Angle:")
            vertical_approach_angle_entry = ttk.Entry(self.pitch_forms[index])#Index = 14


            pitch_label.grid(row = 0, column = 0, padx=5, pady=5)

            velocity_label.grid(row=1, column=0, padx=5, pady=5)
            velocity_entry.grid(row=1, column=1, padx=5, pady=5)

            induced_vertical_break_label.grid(row=2, column=0, padx=5, pady=5)
            induced_vertical_break_entry.grid(row=2, column=1, padx=5, pady=5)

            horizontal_break_label.grid(row=3, column=0, padx=5, pady=5)
            horizontal_break_entry.grid(row=3, column=1, padx=5, pady=5)

            spin_rate_label.grid(row=4, column=0, padx=5, pady=5)
            spin_rate_entry.grid(row=4, column=1, padx=5, pady=5)

            release_height_label.grid(row=5, column=0, padx=5, pady=5)
            release_height_entry.grid(row=5, column=1, padx=5, pady=5)

            extension_label.grid(row=6, column=0, padx=5, pady=5)
            extension_entry.grid(row=6, column=1, padx=5, pady=5)

            vertical_approach_angle_label.grid(row=7, column=0, padx=5, pady=5)
            vertical_approach_angle_entry.grid(row=7, column=1, padx=5, pady=5)
            self.pitch_forms[index].pack(padx=10, pady=10, side=tk.TOP)
            index = index + 1


        grade_button = ttk.Button(self.frame2, text="Grade Pitch", command=lambda: results_text.set("Scores: " + str(self.submit_forms(pitch_choices))))
        back_button = ttk.Button(self.frame2, text="New Pitcher", command=lambda: self.restart())
        results_label = ttk.Label(self.frame2, textvariable=results_text)
        results_label.pack(pady=20,padx=20)
        grade_button.pack(side=tk.LEFT)
        back_button.pack(side = tk.LEFT)




#["velocity", "induced_vertical_break", "horizontal_break", "spin_rate", "release_height", "extension", "vertical_approach_angle"]
#TODO: Make an app class and pass the root. Make screens with frames that come from functions, the next function will destroy the previous frame

if __name__ == "__main__":
    print(grade_metrics(load_base_metrics("base_metrics.json"), "RH_4S_Fastball", 10, 100, 23, 8.2, 2600, 5, 5, 5))
    root = tk.Tk()
    app = PitchGradeApp(root)
    root.mainloop()




