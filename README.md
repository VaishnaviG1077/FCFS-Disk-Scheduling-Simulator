# FCFS Disk Scheduling Simulation

## 📌 About the Project

The **FCFS (First Come, First Served) Disk Scheduling Simulation** is an Operating Systems project that demonstrates how disk I/O requests are processed in the order they arrive.

The project provides a graphical user interface to enter disk cylinder requests and the initial head position. It calculates total head movement, total seek time, and average seek time.

## 🎯 Objectives

- Understand the FCFS disk scheduling algorithm.
- Simulate disk-head movement.
- Calculate total head movement and seek time.
- Display average seek time.
- Learn disk scheduling through an interactive simulation.

## 🛠️ Technologies Used

- **HTML** – Structure of the web interface
- **CSS** – Styling and responsive layout
- **JavaScript** – Simulation logic and calculations
- **C++** – Implementation of the FCFS algorithm

## ⚙️ Features

- Input disk cylinder requests.
- Specify the initial disk-head position.
- Process requests in their arrival order.
- Display the seek sequence.
- Calculate total head movement.
- Calculate total and average seek time.
- Display movement details in a table.
- Validate user input.

## 🧠 Algorithm

1. Start.
2. Accept the initial disk-head position.
3. Accept the sequence of disk requests.
4. Initialize total head movement to zero.
5. Process each request in the given order.
6. Calculate the absolute difference between the current head position and the requested cylinder.
7. Add the movement to the total.
8. Update the current head position.
9. Calculate total seek time and average seek time.
10. Display the results.
11. Stop.

## 📐 Formulas

**Head Movement**

Total Head Movement = Sum of the absolute differences between consecutive head positions.

**Total Seek Time**

Total Seek Time = Total Head Movement × Seek Rate

**Average Seek Time**

Average Seek Time = Total Seek Time / Number of Seek Operations

*Assumption: The simulation uses a seek rate of 1 second per cylinder.*

## 📂 Project Structure

```text
FCFS-Disk-Scheduling/
│
├── index.html
├── style.css
├── script.js
├── fcfs.cpp
└── README.md
```

## ▶️ How to Run

### Run the Web Simulation

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser, or use the Live Server extension.
4. Enter the cylinder requests and initial head position.
5. Click **SUBMIT** to view the simulation results.

### Run the C++ Program

Compile and execute the C++ program using the VS Code terminal:

```bash
clang++ -std=c++17 fcfs.cpp -o fcfs
./fcfs
```

The HTML/JavaScript simulation and C++ program run independently in this version.

## 🧪 Sample Input

- **Initial Head Position:** 10
- **Cylinder Requests:** 5, 9, 18, 2, 15

### Expected Output

| Movement | Distance |
|---|---:|
| 10 → 5 | 5 |
| 5 → 9 | 4 |
| 9 → 18 | 9 |
| 18 → 2 | 16 |
| 2 → 15 | 13 |
| **Total Head Movement** | **47 cylinders** |

- Total Seek Time: 47 seconds
- Seek Operations: 5
- Average Seek Time: 9.40 seconds

## ✅ Advantages

- Simple and easy to implement.
- Processes requests in arrival order.
- Easy to understand and demonstrate.
- Provides clear head-movement calculations.

## ⚠️ Limitations

- Does not optimize disk-head movement.
- Can result in high total seek time.
- Does not prioritize requests based on cylinder location.

## 🚀 Future Enhancements

- Add graphical animation of disk-head movement.
- Support configurable disk-cylinder ranges.
- Integrate the C++ algorithm with the web interface.
- Implement and compare SSTF, SCAN, C-SCAN, LOOK, and C-LOOK algorithms.
- Add visual charts for comparing head movement.

## 📚 References

- [FCFS Disk Scheduling Virtual Lab](https://erpjietuniverse.in/virtual_lab/Operating_system/labs/exp10/exp/fcfs.html)
- Operating Systems course materials.

## 👩‍💻 Contributors

1.Vaishnavi Gosavi

2.Pranjali Mule

3.Aditya Munde

4.Rajkumar Pal
