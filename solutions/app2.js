const sorterPromise = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === 'string')) {
            arr = arr.sort();
            resolve(arr);
        } else {
            reject('Error: Not all elements are string type!');
        }
    })
}


// export default sorterPromise;
export default sorterPromise;
