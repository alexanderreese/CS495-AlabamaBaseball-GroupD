const defaultMetrics = {
    fours_fastball: {
      metrics: [
        { value: "velocity", 
            weight: 1.75, 
            average: 90,
            range: [
              { min: 0, max: 89, score: 0 }, 
              { min: 90, max: 99, score: 5 }, 
              { min: 100, max: Infinity, score: 10 }
            ] 
          },  // Velocity
          { value: "inducedVerticalBreak", 
            weight: 1, 
            average: 18,
            range: [
              { min: 0, max: 13, score: 0 }, 
              { min: 14, max: 22, score: 5 }, 
              { min: 23, max: Infinity, score: 10 }
            ] 
          },  // Induced Vertical Break
          { value: "horizontalBreak", 
            weight: 0.5,
            average: 9, 
            range: [
              { min: 4, max: 7, score: 3 }, 
              { min: 14, max: 19, score: 3 }, 
              { min: 12, max: 13, score: 5 }, 
              { min: 8, max: 11, score: 7 }
            ] 
          },  // Horizontal Break
          { value: "spinRate", 
            weight: 0.15, 
            average: 2240,
            range: [
              { min: 0, max: 2249, score: 0 }, 
              { min: 2250, max: 2599, score: 5 }, 
              { min: 2600, max: Infinity, score: 10 }
            ] 
          },  // Spin Rate
          { value: "releaseHeight",
            weight: 0.75,
            average: 6,
            range: [
              { min: 6.4, max: 7, score: 3 }, 
              { min: 5.9, max: 6.3, score: 5 }, 
              { min: 5.5, max: 5.8, score: 7 }, 
              { min: 5, max: 5.5, score: 9 }, 
              { max: 5, score: 10 }
            ] 
          },  // Release Height
          { value: "extension",
            weight: 0.5,
            average: 6,
            range: [
              { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
              { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
              { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
              { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
            ] 
          },  // Extension
          { value: "verticalApproachAngle",
            weight: 0.35,
            average: -5.2,
            range: [
              { min: -5.7, max: -5, score: 2 },
              { min: -4.99, max: -4.5, score: 5 },
              { min: -6.2, max: -5.8, score: 5 },
              { min: -4.49, max: -4, score: 8 },
              { min: -6.8, max: -6.3, score: 8 },
              { max: -4, score: 10 },
              { min: -6.8, score: 10 }
            ]
          }// Vertical Approach Angle
      ],
    },
    twos_fastball: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      si_fastball: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      ct_fastball: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      cutter: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      gyro_slider: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      slider: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      slutter: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      sweeper: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      slurve: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      twelve_six: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      traditional_ch: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      sidespin_ch: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
      splitter: {
        metrics: [
          { value: "velocity", 
              weight: 1.75, 
              average: 90,
              range: [
                { min: 0, max: 89, score: 0 }, 
                { min: 90, max: 99, score: 5 }, 
                { min: 100, max: Infinity, score: 10 }
              ] 
            },  // Velocity
            { value: "inducedVerticalBreak", 
              weight: 1, 
              average: 18,
              range: [
                { min: 0, max: 13, score: 0 }, 
                { min: 14, max: 22, score: 5 }, 
                { min: 23, max: Infinity, score: 10 }
              ] 
            },  // Induced Vertical Break
            { value: "horizontalBreak", 
              weight: 0.5,
              average: 9, 
              range: [
                { min: 4, max: 7, score: 3 }, 
                { min: 14, max: 19, score: 3 }, 
                { min: 12, max: 13, score: 5 }, 
                { min: 8, max: 11, score: 7 }
              ] 
            },  // Horizontal Break
            { value: "spinRate", 
              weight: 0.15, 
              average: 2240,
              range: [
                { min: 0, max: 2249, score: 0 }, 
                { min: 2250, max: 2599, score: 5 }, 
                { min: 2600, max: Infinity, score: 10 }
              ] 
            },  // Spin Rate
            { value: "releaseHeight",
              weight: 0.75,
              average: 6,
              range: [
                { min: 6.4, max: 7, score: 3 }, 
                { min: 5.9, max: 6.3, score: 5 }, 
                { min: 5.5, max: 5.8, score: 7 }, 
                { min: 5, max: 5.5, score: 9 }, 
                { max: 5, score: 10 }
              ] 
            },  // Release Height
            { value: "extension",
              weight: 0.5,
              average: 6,
              range: [
                { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
                { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
                { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
                { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
              ] 
            },  // Extension
            { value: "verticalApproachAngle",
              weight: 0.35,
              average: -5.2,
              range: [
                { min: -5.7, max: -5, score: 2 },
                { min: -4.99, max: -4.5, score: 5 },
                { min: -6.2, max: -5.8, score: 5 },
                { min: -4.49, max: -4, score: 8 },
                { min: -6.8, max: -6.3, score: 8 },
                { max: -4, score: 10 },
                { min: -6.8, score: 10 }
              ]
            }// Vertical Approach Angle
        ],
      },
  };

  export default defaultMetrics;