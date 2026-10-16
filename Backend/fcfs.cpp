
#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <cstdlib>
#include <iomanip>
using namespace std;

int main() {
    string input;
    int head;

    cout << "FCFS Disk Scheduling Algorithm\n";

    cout << "Enter cylinder values (0-99), separated by commas: ";
    getline(cin, input);

    cout << "Enter initial head position (0-99): ";
    if (!(cin >> head) || head < 0 || head > 99) {
        cout << "Invalid head position.\n";
        return 1;
    }

    vector<int> requests;
    stringstream ss(input);
    string token;

    while (getline(ss, token, ',')) {
        stringstream valueStream(token);
        int value;
        char extra;

        if (!(valueStream >> value) ||
            (valueStream >> extra) ||
            value < 0 || value > 99) {
            cout << "Invalid cylinder request: " << token << "\n";
            return 1;
        }

        requests.push_back(value);
    }

    if (requests.empty()) {
        cout << "No cylinder requests provided.\n";
        return 1;
    }

    int current = head;
    int totalMovement = 0;

    cout << "\nSeek Sequence: " << head;

    cout << "\n\nFrom\tTo\tMovement\n";

    for (int request : requests) {
        int movement = abs(current - request);

        cout << current << "\t"
             << request << "\t"
             << movement << "\n";

        totalMovement += movement;
        current = request;

        cout << request;
        // The detailed movement table above shows the order.
    }

    double seekRate = 1.0;
    double totalSeekTime = seekRate * totalMovement;
    int operations = static_cast<int>(requests.size());

    double averageSeekTime =
        totalSeekTime / operations;

    cout << "\n\nTotal Head Movement: "
         << totalMovement << " cylinders\n";

    cout << "Total Seek Time: "
         << totalSeekTime << " seconds\n";

    cout << "Seek Operations: "
         << operations << "\n";

    cout << fixed << setprecision(2);
    cout << "Average Seek Time: "
         << averageSeekTime << " seconds\n";

    return 0;
}
