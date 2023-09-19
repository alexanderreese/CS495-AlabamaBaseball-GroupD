function gradeVelocity(velocity, hand, pitch) {
    //alert('here');
    if (hand == 'Right' && pitch == '4S Fastball') {
        if (velocity < 80) {
            return 0 * 1.75;
        } else if (velocity >= 80 && velocity <= 90) {
            // Linear interpolation for grades between 0 and 5
            return (0 + ((velocity - 80) / (90 - 80)) * (5 - 0)) * 1.75;
        } else if (velocity > 90 && velocity <= 100) {
            // Linear interpolation for grades between 5 and 10
            return (5 + ((velocity - 90) / (100 - 90)) * (10 - 5)) * 1.75;
        } else if (velocity > 100) {
            return (10) * 1.75;
        }
        else {
            return 0 * 1.75;
        }
    } else if (hand == 'Left' && pitch == '4S Fastball') {
        if (velocity < 79) {
            return 0 * 1.75;
        } else if (velocity >= 79 && velocity <= 89) {
            // Linear interpolation for grades between 0 and 5
            return (0 + ((velocity - 79) / (89 - 79)) * (5 - 0)) * 1.75;
        } else if (velocity > 89 && velocity <= 99) {
            // Linear interpolation for grades between 5 and 10
            return (5 + ((velocity - 89) / (99 - 89)) * (10 - 5)) * 1.75;
        } else if (velocity > 99) {
            return 10 * 1.75;
        }
        else {
            return 0 * 1.75;
        }
    } else if (hand == 'Right' && pitch == '2S Fastball') {
        if (velocity < 81) {
            return 0;
        } else if (velocity >= 81 && velocity <= 91) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 81) / (91 - 81)) * (5 - 0);
        } else if (velocity > 91 && velocity <= 101) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 91) / (101 - 91)) * (10 - 5);
        } else if (velocity > 101) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == '2S Fastball') {
        if (velocity < 80) {
            return 0;
        } else if (velocity >= 80 && velocity <= 90) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 80) / (90 - 80)) * (5 - 0);
        } else if (velocity > 90 && velocity <= 100) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 90) / (100 - 90)) * (10 - 5);
        } else if (velocity > 100) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'SI Fastball') {
        if (velocity < 80) {
            return 0;
        } else if (velocity >= 80 && velocity <= 90) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 80) / (90 - 80)) * (5 - 0);
        } else if (velocity > 90 && velocity <= 100) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 90) / (100 - 90)) * (10 - 5);
        } else if (velocity > 100) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'SI Fastball') {
        if (velocity < 79) {
            return 0;
        } else if (velocity >= 79 && velocity <= 89) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 79) / (89 - 79)) * (5 - 0);
        } else if (velocity > 89 && velocity <= 99) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 89) / (99 - 89)) * (10 - 5);
        } else if (velocity > 99) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'CT Fastball') {
        if (velocity < 79) {
            return 0;
        } else if (velocity >= 79 && velocity <= 89) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 79) / (89 - 79)) * (5 - 0);
        } else if (velocity > 89 && velocity <= 99) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 89) / (99 - 89)) * (10 - 5);
        } else if (velocity > 99) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'CT Fastball') {
        if (velocity < 77) {
            return 0;
        } else if (velocity >= 77 && velocity <= 87) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 77) / (87 - 77)) * (5 - 0);
        } else if (velocity > 87 && velocity <= 97) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 87) / (97 - 87)) * (10 - 5);
        } else if (velocity > 97) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'Cutter') {
        if (velocity < 76) {
            return 0;
        } else if (velocity >= 76 && velocity <= 86) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 76) / (86 - 76)) * (5 - 0);
        } else if (velocity > 86 && velocity <= 96) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 86) / (96 - 86)) * (10 - 5);
        } else if (velocity > 96) {
            return 10;
        }
        else {
            return 0;
        }

    } else if (hand == 'Left' && pitch == 'Cutter') {
        if (velocity < 75) {
            return 0;
        } else if (velocity >= 75 && velocity <= 85) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 75) / (85 - 75)) * (5 - 0);
        } else if (velocity > 85 && velocity <= 95) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 85) / (95 - 85)) * (10 - 5);
        } else if (velocity > 95) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'Gyro Slider') {
        if (velocity < 77) {
            return 0;
        } else if (velocity >= 77 && velocity <= 83) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 77) / (83 - 77)) * (5 - 0);
        } else if (velocity > 83 && velocity <= 89) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 83) / (89 - 83)) * (10 - 5);
        } else if (velocity > 89) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'Gyro Slider') {
        if (velocity < 75) {
            return 0;
        } else if (velocity >= 75 && velocity <= 81) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 75) / (81 - 75)) * (5 - 0);
        } else if (velocity > 81 && velocity <= 87) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 81) / (87 - 81)) * (10 - 5);
        } else if (velocity > 87) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'Slider') {
        if (velocity < 74) {
            return 0;
        } else if (velocity >= 74 && velocity <= 81) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 74) / (81 - 74)) * (5 - 0);
        } else if (velocity > 81 && velocity <= 88) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 81) / (88 - 81)) * (10 - 5);
        } else if (velocity > 88) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'Slider') {
        if (velocity < 72) {
            return 0;
        } else if (velocity >= 72 && velocity <= 79) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 72) / (79 - 72)) * (5 - 0);
        } else if (velocity > 79 && velocity <= 86) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 79) / (86 - 79)) * (10 - 5);
        } else if (velocity > 86) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'Slutter') {
        if (velocity < 75) {
            return 0;
        } else if (velocity >= 75 && velocity <= 82) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 75) / (82 - 75)) * (5 - 0);
        } else if (velocity > 82 && velocity <= 89) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 82) / (89 - 82)) * (10 - 5);
        } else if (velocity > 89) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'Slutter') {
        if (velocity < 75) {
            return 0;
        } else if (velocity >= 75 && velocity <= 82) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 75) / (82 - 75)) * (5 - 0);
        } else if (velocity > 82 && velocity <= 89) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 82) / (89 - 82)) * (10 - 5);
        } else if (velocity > 89) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'Sweeper') {
        if (velocity < 69) {
            return 0;
        } else if (velocity >= 69 && velocity <= 79) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 69) / (79 - 69)) * (5 - 0);
        } else if (velocity > 82 && velocity <= 89) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 79) / (89 - 79)) * (10 - 5);
        } else if (velocity > 89) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'Sweeper') {
        if (velocity < 67) {
            return 0;
        } else if (velocity >= 67 && velocity <= 77) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 67) / (77 - 67)) * (5 - 0);
        } else if (velocity > 77 && velocity <= 87) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 77) / (87 - 77)) * (10 - 5);
        } else if (velocity > 87) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'Slurve') {
        if (velocity < 73) {
            return 0;
        } else if (velocity >= 73 && velocity <= 79) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 73) / (79 - 73)) * (5 - 0);
        } else if (velocity > 79 && velocity <= 85) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 79) / (85 - 79)) * (10 - 5);
        } else if (velocity > 85) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'Slurve') {
        if (velocity < 71) {
            return 0;
        } else if (velocity >= 71 && velocity <= 77) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 71) / (77 - 71)) * (5 - 0);
        } else if (velocity > 77 && velocity <= 83) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 77) / (83 - 77)) * (10 - 5);
        } else if (velocity > 83) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == '12/6') {
        if (velocity < 72) {
            return 0;
        } else if (velocity >= 72 && velocity <= 78) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 72) / (78 - 72)) * (5 - 0);
        } else if (velocity > 78 && velocity <= 84) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 78) / (84 - 78)) * (10 - 5);
        } else if (velocity > 84) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == '12/6') {
        if (velocity < 70) {
            return 0;
        } else if (velocity >= 70 && velocity <= 76) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 70) / (76 - 70)) * (5 - 0);
        } else if (velocity > 76 && velocity <= 82) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 76) / (82 - 76)) * (10 - 5);
        } else if (velocity > 82) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Right' && pitch == 'Traditional CH') {
        if (velocity < 75) {
            return 0;
        } else if (velocity >= 75 && velocity <= 82) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((velocity - 75) / (82 - 75)) * (5 - 0);
        } else if (velocity > 82 && velocity <= 89) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((velocity - 82) / (89 - 82)) * (10 - 5);
        } else if (velocity > 89) {
            return 10;
        }
        else {
            return 0;
        }
    } else if (hand == 'Left' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Splitter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Splitter') {
        return 5;
    }

}

function gradeIVB(ivb, hand, pitch) {
    if (hand == 'Right' && pitch == '4S Fastball') {
        if (ivb < 13) {
            return 0;
        } else if (ivb >= 13 && ivb <= 18) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((ivb - 13) / (18 - 13)) * (5 - 0);
        } else if (ivb > 18 && ivb <= 23) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((ivb - 18) / (23 - 18)) * (10 - 5);
        } else if (ivb > 23) {
            return 10;
        } else {
            // Handle any other cases, if needed
            return 0; // or an appropriate value
        }
    } else if (hand == 'Left' && pitch == '4S Fastball') {
        if (ivb < 13) {
            return 0;
        } else if (ivb >= 13 && ivb <= 18) {
            // Linear interpolation for grades between 0 and 5
            return 0 + ((ivb - 13) / (18 - 13)) * (5 - 0);
        } else if (ivb > 18 && ivb <= 23) {
            // Linear interpolation for grades between 5 and 10
            return 5 + ((ivb - 18) / (23 - 18)) * (10 - 5);
        } else if (ivb > 23) {
            return 10;
        } else {
            // Handle any other cases, if needed
            return 0; // or an appropriate value
        }
    } else if (hand == 'Right' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Right' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Left' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Splitter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Splitter') {
        return 5;
    }
}

function gradeHB(HB, hand, pitch) {
    if (hand == 'Right' && pitch == '4S Fastball') {
        if (HB < 4 || HB > 19) {
            return 0 * .5;
        }
        else if (HB >= 4 && HB < 7) {
            return 3 * .5;
        }
        else if (HB >= 14 && HB <= 19) {
            return 3 * .5;
        }
        else if (HB >= 12 && HB <= 13) {
            return 5 * .5;
        }
        else if (HB >= 7 && HB <= 11) {
            return 7 * .5;
        }
        else {
            return 0 * .5;
        }
    } else if (hand == 'Left' && pitch == '4S Fastball') {
        if (HB > -4 || HB < -19) {
            return 0 * .5;
        }
        else if (HB <= -4 && HB > -7) {
            return 3 * .5;
        }
        else if (HB <= -14 && HB >= -19) {
            return 3 * .5;
        }
        else if (HB <= -12 && HB >= -13) {
            return 5 * .5;
        }
        else if (HB <= -7 && HB >= -11) {
            return 7 * .5;
        }
        else {
            return 0 * .5;
        }
    } else if (hand == 'Right' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Right' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Left' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Splitter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Splitter') {
        return 5;
    }
}

function gradeSR(spinRate, hand, pitch) {
    if (hand == 'Right' && pitch == '4S Fastball') {
        if (spinRate < 1800) {
            return 0 * .15;
        } else if (spinRate >= 1800 && spinRate <= 2250) {
            // Linear interpolation for grades between 0 and 5
            return (0 + ((spinRate - 1800) / (2250 - 1800)) * (5 - 0)) * .15;
        } else if (spinRate > 2250 && spinRate <= 2600) {
            // Linear interpolation for grades between 5 and 10
            return (5 + ((spinRate - 2250) / (2600 - 2250)) * (10 - 5)) * .15;
        } else if (spinRate > 2600) {
            return 10 * .15;
        } else {
            // Handle any other cases, if needed
            return 0 * .15; // or an appropriate value
        }
    } else if (hand == 'Left' && pitch == '4S Fastball') {
        if (spinRate < 1800) {
            return 0 * .15;
        } else if (spinRate >= 1800 && spinRate <= 2250) {
            // Linear interpolation for grades between 0 and 5
            return (0 + ((spinRate - 1800) / (2250 - 1800)) * (5 - 0)) * .15;
        } else if (spinRate > 2250 && spinRate <= 2600) {
            // Linear interpolation for grades between 5 and 10
            return (5 + ((spinRate - 2250) / (2600 - 2250)) * (10 - 5)) * .15;
        } else if (spinRate > 2600) {
            return 10 * .15;
        } else {
            // Handle any other cases, if needed
            return 0 * .15; // or an appropriate value
        }
    } else if (hand == 'Right' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Right' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Left' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Splitter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Splitter') {
        return 5;
    }
}

function gradeRH(relativeHeight, hand, pitch) {
    if (hand == 'Right' && pitch == '4S Fastball') {
        if (relativeHeight < 5) {
            // Below 5 = 10
            return 10 * .75;
        } else if (relativeHeight >= 5 && relativeHeight <= 5.5) {
            // 5-5.5 = 9
            return 9 * .75;
        } else if (relativeHeight > 5.5 && relativeHeight <= 5.8) {
            // 5.5-5.8 = 7
            return 7 * .75;
        } else if (relativeHeight > 5.8 && relativeHeight <= 6.3) {
            // 5.9-6.3 = 5
            return 5 * .75;
        } else if (relativeHeight > 6.3 && relativeHeight <= 7) {
            // 6.4-7 = 3
            return 3 * .75;
        } else {
            // Handle any other cases, if needed
            return 0 * .75; // or an appropriate value
        }
    } else if (hand == 'Left' && pitch == '4S Fastball') {
        if (relativeHeight < 5) {
            // Below 5 = 10
            return 10 * .75;
        } else if (relativeHeight >= 5 && relativeHeight <= 5.5) {
            // 5-5.5 = 9
            return 9 * .75;
        } else if (relativeHeight > 5.5 && relativeHeight <= 5.8) {
            // 5.5-5.8 = 7
            return 7 * .75;
        } else if (relativeHeight > 5.8 && relativeHeight <= 6.3) {
            // 5.9-6.3 = 5
            return 5 * .75;
        } else if (relativeHeight > 6.3 && relativeHeight <= 7) {
            // 6.4-7 = 3
            return 3 * .75;
        } else {
            // Handle any other cases, if needed
            return 0 * .75; // or an appropriate value
        }
    } else if (hand == 'Right' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Right' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Left' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Splitter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Splitter') {
        return 5;
    }
}

function gradeExtension(extension, hand, pitch) {
    if (hand == 'Right' && pitch == '4S Fastball') {
        if (extension < 5.4) {
            // Below 5.4 = 0
            return 0 * .5;
        } else if (extension === 5.5) {
            // 5.5 = 1
            return 1 * .5;
        } else if (extension === 5.6) {
            // 5.6 = 2
            return 2 * .5;
        } else if (extension === 5.7) {
            // 5.7 = 3
            return 3 * .5;
        } else if (extension === 5.8) {
            // 5.8 = 4
            return 4 * .5;
        } else if (extension >= 5.9 && extension <= 6.2) {
            // 5.9-6.2 = 5
            return 5 * .5;
        } else if (extension === 6.3) {
            // 6.3 = 6
            return 6 * .5;
        } else if (extension === 6.4) {
            // 6.4 = 7
            return 7 * .5;
        } else if (extension === 6.5) {
            // 6.5 = 8
            return 8 * .5;
        } else if (extension >= 6.6 && extension <= 6.7) {
            // 6.6-6.7 = 9
            return 9 * .5;
        } else {
            // Above 6.7 = 10
            return 10 * .5;
        }
    } else if (hand == 'Left' && pitch == '4S Fastball') {
        if (extension < 5.4) {
            // Below 5.4 = 0
            return 0 * .5;
        } else if (extension === 5.5) {
            // 5.5 = 1
            return 1 * .5;
        } else if (extension === 5.6) {
            // 5.6 = 2
            return 2 * .5;
        } else if (extension === 5.7) {
            // 5.7 = 3
            return 3 * .5;
        } else if (extension === 5.8) {
            // 5.8 = 4
            return 4 * .5;
        } else if (extension >= 5.9 && extension <= 6.2) {
            // 5.9-6.2 = 5
            return 5 * .5;
        } else if (extension === 6.3) {
            // 6.3 = 6
            return 6 * .5;
        } else if (extension === 6.4) {
            // 6.4 = 7
            return 7 * .5;
        } else if (extension === 6.5) {
            // 6.5 = 8
            return 8 * .5;
        } else if (extension >= 6.6 && extension <= 6.7) {
            // 6.6-6.7 = 9
            return 9 * .5;
        } else {
            // Above 6.7 = 10
            return 10 * .5;
        }
    } else if (hand == 'Right' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Right' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Left' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Splitter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Splitter') {
        return 5;
    }
}

function gradeVAA(vaa, hand, pitch) {
    //alert(vaa);
    if (hand == 'Right' && pitch == '4S Fastball') {
        if (vaa <= -5 && vaa >= -5.7) {
            //alert('here1');
            // -5 to -5.7 = 2
            return 2 * .35;
        } else if (vaa <= -4.5 && vaa >= -4.99) {
            //alert('here2');
            // -4.5 to -4.99 = 5
            return 5 * .35;
        } else if (vaa <= -5.8 && vaa >= -6.2) {
            //alert('here3');
            // -5.8 to -6.2 = 5
            return 5 * .35;
        } else if (vaa <= -4 && vaa >= -4.49) {
            //alert('here4');
            // -4 to -4.49 = 8
            return 8 * .35;
        } else if (vaa <= -6.3 && vaa >= -6.8) {
            //alert('here5');
            // -6.3 to -6.8 = 8
            return 8 * .35;
        } else if (vaa < -4) {
            //alert('here6');
            // Below -4 = 10
            return 10 * .35;
        } else {
            //alert('here7');
            // Above -6.8 = 10
            return 10 * .35;
        }
    } else if (hand == 'Left' && pitch == '4S Fastball') {
        if (vaa >= -5 && vaa <= -5.7) {
            // -5 to -5.7 = 2
            return 2 * .35;
        } else if (vaa >= -4.5 && vaa <= -4.99) {
            // -4.5 to -4.99 = 5
            return 5 * .35;
        } else if (vaa >= -5.8 && vaa <= -6.2) {
            // -5.8 to -6.2 = 5
            return 5 * .35;
        } else if (vaa >= -4 && vaa <= -4.49) {
            // -4 to -4.49 = 8
            return 8 * .35;
        } else if (vaa >= -6.3 && vaa <= -6.8) {
            // -6.3 to -6.8 = 8
            return 8 * .35;
        } else if (vaa < -4) {
            // Below -4 = 10
            return 10 * .35;
        } else {
            // Above -6.8 = 10
            return 10 * .35;
        }
    } else if (hand == 'Right' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == '2S Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'SI Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Left' && pitch == 'CT Fastball') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Cutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Gyro Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slider') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slutter') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sweeper') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Slurve') {
        return 5;
    } else if (hand == 'Right' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Left' && pitch == '12/6') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Traditional CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Sidespin CH') {
        return 5;
    } else if (hand == 'Right' && pitch == 'Splitter') {
        return 5;
    } else if (hand == 'Left' && pitch == 'Splitter') {
        return 5;
    }
}

function gradePitch() {
    // Get the values entered by the user
    const velocity = parseFloat(document.getElementById('input1').value);
    const IVB = parseFloat(document.getElementById('input2').value);
    const HB = parseFloat(document.getElementById('input3').value);
    const SR = parseFloat(document.getElementById('input4').value);
    const RH = parseFloat(document.getElementById('input5').value);
    const Extension = parseFloat(document.getElementById('input6').value);
    const VAA = parseFloat(document.getElementById('input7').value);

    const hand = document.getElementById('dropdown1').value;
    const pitch = document.getElementById('dropdown2').value;

    // Check if the input is valid
    if (isNaN(velocity) || isNaN(IVB) || isNaN(HB) || isNaN(SR) || isNaN(RH) || isNaN(Extension) || isNaN(VAA)) {
        alert('Please enter a valid number for each input');
        return;
    } else if (hand == 'Select Handedeness') {
        alert('Please choose a handdedness');
        return;

    } else if (pitch == 'Select Pitch Type') {
        alert('Please choose a pitch type');
        return;
    }

    // Calculate the grade
    const grade = gradeVelocity(velocity, hand, pitch) + gradeIVB(IVB, hand, pitch) + gradeHB(HB, hand, pitch) + gradeRH(RH, hand, pitch) + gradeExtension(Extension, hand, pitch) + gradeVAA(VAA, hand, pitch) + gradeSR(SR, hand, pitch);

    alert('The grade for this pitch is ' + grade.toFixed(2) + '/50');
}
