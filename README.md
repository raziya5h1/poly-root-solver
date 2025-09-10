# poly-root-solver
Upload the code 
# Polynomial Constant Solver

## 📌 Problem
You are given polynomial roots in JSON format (with base & value).  
The task is to compute the **constant term `c`** of the polynomial.

- **n** → total number of roots provided  
- **k** → minimum number of roots required (`k = m + 1`, where `m` is polynomial degree)  
- **Formula**:  
c = (-1)^m × (product of first k roots)


---

## 📂 Project Structure


poly-root-solver/
├── find_constant.js # Main program
├── input1.json # Test case 1
└── input2.json # Test case 2


---

## ▶ How to Run
1. Install [Node.js](https://nodejs.org/).
2. Clone this repo or download the folder.
3. Run the program with a JSON input:
   ```bash
   node find_constant.js input1.json
   node find_constant.js input2.json
Input 1 (input1.json)
Using first 3 roots (n=4, degree m=2): [ 4, 7, 12 ]
Constant term (c) = 336

Input 2 (input2.json)
Using first 7 roots (n=10, degree m=6): [ 995085094601491, 320923294898495940, ... ]
Constant term (c) = 68251311922474231053805943194899553250019833451566378549087604109074070376992897820854421705441449623084700627165097282764800


4. Scroll down and click **Commit new file**.

---

## 🔹 2. Double-check your repo
After commit, your repo should show:
- `find_constant.js`  
- `input1.json`  
- `input2.json`  
- `README.md`

---

## 🔹 3. Submission
Now just copy your **GitHub repo link** (example: `https://github.com/your-username/poly-root-solver`) and paste it in the submission form ✅

---

👉 Do you want me to check your GitHub repo if you paste me the link here, to make sure everything looks polished before you submit?
