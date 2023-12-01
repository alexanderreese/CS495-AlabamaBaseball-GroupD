from flask import Flask, jsonify, request
from flask_cors import CORS
import main

app = Flask(__name__)
CORS(app)
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

    grade = round(main.grade_pitch(base_metrics, value0, 200, value1, value2, value3, value4, value5, value6, value7), 1) #Hard coded max grade to be 200
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
        grades[index] = round(grades[index], 1)
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

@app.route('/api/get_metrics', methods = ['GET'])
def get_metrics():
    return jsonify(base_metrics)

#edit_metric() will change the values and information about a certain metric. Must include: pitch_type, goal, max, min, target, metric
@app.route('/api/edit_metric', methods=['POST'])
def edit_metric():
    flag = False #True if the structure of the dictionary does not follow the designed structure or the names are incorrect. pitch{category{metric}}
    new_metrics = request.get_json()
    try:
        print(base_metrics[new_metrics["pitch_type"]]["max"][new_metrics["metric"]])
    except KeyError:
        response = f"Error: Pitch type or metric name not found in base_metrics."
        return jsonify({"result": response})
    base_metrics[new_metrics["pitch_type"]]["max"][new_metrics["metric"]] = new_metrics["max"]
    base_metrics[new_metrics["pitch_type"]]["min"][new_metrics["metric"]] = new_metrics["min"]
    base_metrics[new_metrics["pitch_type"]]["target"][new_metrics["metric"]] = new_metrics["target"]
    base_metrics[new_metrics["pitch_type"]]["goal"][new_metrics["metric"]] = new_metrics["goal"]
    main.save_base_metrics("base_metrics.json", base_metrics)
    return jsonify({"message": "POST request received", "result": "The new metrics have been saved."})

#This function requires the name of the pitch you are looking for EX: /api/get_avgs/RH_4S_Fastball
#get_avgs() will return the averages of the metrics of a pitch given the pitch's name which includes the hand it is thrown with.
@app.route('/api/get_avgs/<pitch_name>', methods=['GET'])
def get_avgs(pitch_name):
    try:
        averages = base_metrics[pitch_name]["avg"]
        avg_grades = main.grade_metrics(base_metrics, pitch_name, 10, averages["velocity"], averages["induced_vertical_break"], averages["horizontal_break"], 
                                        averages["spin_rate"], averages["release_height"], averages["extension"], averages["vertical_approach_angle"])
        avg_pitch_grade = main.grade_pitch(base_metrics, pitch_name, 200, averages["velocity"], averages["induced_vertical_break"], averages["horizontal_break"], 
                                        averages["spin_rate"], averages["release_height"], averages["extension"], averages["vertical_approach_angle"])
        avg_pitch_grade = round(avg_pitch_grade, 1)
        index = 0
        while index < len(avg_grades):
            avg_grades[index] = round(avg_grades[index], 1)
            index = index + 1
        
        data = {'velocity': avg_grades[0], 'ivBreak': avg_grades[1], 'hBreak': avg_grades[2], 'spinRate': avg_grades[3],
                                                'relHeight': avg_grades[4], 'extension': avg_grades[5], 'vAppAngle': avg_grades[6], 'pitch_grade': avg_pitch_grade}
        return jsonify(data)
    except KeyError:
        response = f"Error: Pitch type '{pitch_name}' not found in base_metrics."
        return jsonify({"response": response})



if __name__ == '__main__':
    app.run(debug=True)
    