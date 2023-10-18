
#goals: min, max, target, edge, none
#For grade helper functions: scale = the max score a value could receive. EX: If scale = 10, then the score is from 0-10.

def grade_min(min: float, max: float, value: float, scale: int) -> int: #Using the range, grade value on how close to the min it is.
    range = max - min
    if range < 0:
        print("grade_min(): max is less than min")
        return -1
    if range == 0:
        print("grade_min(): max = min")
        return -1
    
    if value < min:
        return scale #This value is less than the goal so its good.
    elif value > max:
        return 0
    else:
        distance = value - min
        return (1 - (distance/range)) * scale
    
def grade_max(min: float, max: float, value: float, scale: int) -> int: #Using the range, grade value on how close to the max it is.
    range = max - min
    if range < 0:
        print("grade_max(): max is less than min")
        return -1
    if range == 0:
        print("grade_max(): max = min")
        return -1
    
    if value < min:
        return 0 
    elif value > max:
        return scale #This value is more than the goal so its good.
    else:
        distance = max - value
        return (1 - (distance/range)) * scale
    
def grade_target(min: float, max: float, target: float, value: float, scale: int) -> int: #Using the range, grade value on how close to the target it is.
    max_range = max - target
    min_range = target - min

    if min > max or min == max:
        print("grade_target(): Range <= 0")
        return -1
    if target < min or target > max:
        print("grade_target(): Target is out of bounds")
        return -1
    if target == min or target == max:
        print("grade_target(): Target is on the edge of the range")
        return -1
    
    if value < min or value > max:
        return 0 #Value has completely missed target relative to the bounds
    elif value == target:
        return scale
    elif value > target:
        distance = value - target
        return (1 - (distance/max_range)) * scale
    else:
        distance = target - value
        return (1 - (distance/min_range)) * scale
    
#Target in this case is the value to try and stay away from
def grade_edge(min: float, max: float, target: float, value: float, scale: int) -> int: #Using the range, grade value on how close to the target it is.
    max_range = max - target
    min_range = target - min

    if min > max or min == max:
        print("grade_edge(): Range <= 0")
        return -1
    if target < min or target > max:
        print("grade_edge(): Target is out of bounds")
        return -1
    if target == min or target == max:
        print("grade_edge(): Target is on the edge of the range")
        return -1
    
    if value < min or value > max:
        return scale #Value is far enough away from target to get a perfect score
    elif value == target:
        return 0 #This is the worst case scenario for a value
    elif value > target:
        distance = value - target
        return (distance/max_range) * scale
    else:
        distance = target - value
        return (distance/min_range) * scale
    
def grade_none(scale: int) -> int: #Produces the average value. It's useful when a metric is pointless for a particular pitch
    return scale / 2.0