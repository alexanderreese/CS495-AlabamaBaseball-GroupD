from flask import Flask, jsonify, request
import main

app = Flask(__name__)
base_metrics = main.load_base_metrics('base_metrics.json')
    
#Order of arguments: velocity, ivBreak, hBreak, spinRate, relHeight, extension, vAppAngle
#To test using PowerShell: Invoke-RestMethod -Uri "http://localhost:5000/api/grade_pitch?pitch_type=RH_4S_Fastball&velocity=5&ivBreak=7&hBreak=2&spinRate=8&relHeight=5&extension=1&vAppAngle=4&" -Method Get
#grade_pitch() returns a score for the pitch based on how its metrics compare to the base_metrics
@app.route('/api/grade_pitch', methods=['GET'])
def grade_pitch():

    value0 = request.args.get('pitch_type', 0)
    value1 = float(request.args.get('velocity', 0))
    value2 = float(request.args.get('ivBreak', 0))
    value3 = float(request.args.get('hBreak', 0))
    value4 = float(request.args.get('spinRate', 0))
    value5 = float(request.args.get('relHeight', 0))
    value6 = float(request.args.get('extension', 0))
    value7 = float(request.args.get('vAppAngle', 0))

    grade = round(main.grade_pitch(base_metrics, value0, 200, value1, value2, value3, value4, value5, value6, value7), 3) #Hard coded max grade to be 200
    # Define the data to be sent in the response
    data = {'pitch_grade': grade}

    # Return the data as JSON in the response
    return jsonify(data)


#grade_split() returns a dictionary of scores that reflects how each metric of a particular pitch compares to the base_metrics
@app.route('/api/grade_split', methods=['GET'])
def grade_split():
    value0 = request.args.get('pitch_type', 0)
    value1 = float(request.args.get('velocity', 0))
    value2 = float(request.args.get('ivBreak', 0))
    value3 = float(request.args.get('hBreak', 0))
    value4 = float(request.args.get('spinRate', 0))
    value5 = float(request.args.get('relHeight', 0))
    value6 = float(request.args.get('extension', 0))
    value7 = float(request.args.get('vAppAngle', 0))

    grades = main.grade_metrics(base_metrics, value0, 10, value1, value2, value3, value4, value5, value6, value7)
    index = 0
    while index < len(grades):
        grades[index] = round(grades[index], 3)
        index = index + 1

    data = {'velocity': grades[0], 'ivBreak': grades[1], 'hBreak': grades[2], 'spinRate': grades[3],
                                                'relHeight': grades[4], 'extension': grades[5], 'vAppAngle': grades[6]}
    
    return jsonify(data)

#restore_defaults() is a fail safe function designed to restore the metrics to their original state based on the original project requirements.
#This is useful in the event that the metrics get updated and destroy the structure of the dictionary
@app.route('/api/restore_defaults', methods=['GET'])
def restore_defaults():
    base_metrics = main.load_base_metrics('default_metrics.json')
    main.save_base_metrics("base_metrics.json", base_metrics)


    return jsonify({"message": "GET request received", "result": "Default metrics successfully restored."})

#new_metrics() allows a client to upload a new set of base_metrics.
#This function is flexible in that if you are looking to update the whole base_metrics, as long as the structure and naming conventions are the same it will update
#If you are looking to update only one metric in one particular category then as long as the structure is {pitch_name: {category:{metric: value}}} it will update that one metric
#The function is also designed to prevent accidental or malicious wipes of the data or destroying of the dictionary structure.
@app.route('/api/new_metrics', methods=['POST'])
def new_metrics():
    flag = False #True if the structure of the dictionary does not follow the designed structure or the names are incorrect. pitch{category{metric}}
    new_metrics = request.get_json()
    for pitch in new_metrics:
        try:
        # Check if the specified pitch type exists in base_metrics
            pitch_data = base_metrics[pitch]
        except KeyError:
            response = f"Error: Pitch type '{pitch}' not found in base_metrics."
            base_metrics = main.load_base_metrics("base_metrics.json") #Restore metrics from last save
            return jsonify({"message": "POST request received", "result": response})
        for category in pitch:
            try:
            # Check if the specified pitch type exists in base_metrics
                category_data = base_metrics[pitch][category]
            except KeyError:
                response = f"Error: Category type '{category}' not found in base_metrics."
                base_metrics = main.load_base_metrics("base_metrics.json") #Restore metrics from last save
                return jsonify({"message": "POST request received", "result": response})
            for metric in category:
                try:
                    # Check if the specified pitch type exists in base_metrics
                    base_metrics[pitch][category][metric] = new_metrics[pitch][category][metric]
                except KeyError:
                    response = f"Error: Metric type '{metric}' not found in base_metrics."
                    base_metrics = main.load_base_metrics("base_metrics.json") #Restore metrics from last save
                    return jsonify({"message": "POST request received", "result": response})

    base_metrics = request.get_json()
    main.save_base_metrics("base_metrics.json", base_metrics)

    return jsonify({"message": "POST request received", "result": "The new metrics have been saved."})

#This function requires the name of the pitch you are looking for EX: /api/get_avgs/RH_4S_Fastball
#get_avgs() will return the averages of the metrics of a pitch given the pitch's name which includes the hand it is thrown with.
@app.route('/api/get_avgs/<pitch_name>', methods=['GET'])
def get_avgs(pitch_name):
    try:
        averages = base_metrics[pitch_name]["avg"]
        return jsonify({"message": "GET request received", "result": averages})
    except KeyError:
        response = f"Error: Pitch type '{pitch_name}' not found in base_metrics."
        return jsonify({"message": "GET request received", "result": response})



if __name__ == '__main__':
    app.run(debug=True)
    