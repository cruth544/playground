import numpy as np

def collatz(n, arr=np.array([])):
    if len(arr) == 0:
        arr = np.append(arr, [n])
    n = np.uint64(n)
    if np.equal(n, 1):
        return [arr, len(arr)]
    else:
        if np.equal(n % 2, 1):
            n = np.add(np.multiply(n, 3), 1)
        else:
            n = np.divide(n, 2)

        arr = np.append(arr, [n])
        return collatz(n, arr)



num = np.multiply(3.3889, np.power(10, 32))
print(collatz(num))


