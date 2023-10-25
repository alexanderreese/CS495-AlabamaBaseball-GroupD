from flask import Flask, jsonify, request
import main

app = Flask(__name__)
base_metrics = main.load_base_metrics('base_metrics.json')
    
#Order of arguments: velocity, ivBreak, hBreak, spinRate, relHeight, extension, vAppAngle
#To test using PowerShell: Invoke-RestMethod -Uri "http://localhost:5000/api/grade_pitch?pitch_type=RH_4S_Fastball&velocity=5&ivBreak=7&hBreak=2&spinRate=8&relHeight=5&extension=1&vAppAngle=4&" -Method Get
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

    grade = round(main.grade_pitch(base_metrics, value0, 200, value1, value2, value3, value4, value5, value6, value7), 3) #Keep in mind the assumption here is the scale is 200
    # Define the data to be sent in the response
    data = {'pitch_grade': grade}

    # Return the data as JSON in the response
    return jsonify(data)

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
if __name__ == '__main__':
    app.run(debug=True)
    