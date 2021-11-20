const converterPromise = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === 'string')) {
            arr = arr.map(x => x.toLocaleUpperCase());
            resolve(arr);        
        } else {
            reject('Error: Not all elements are string type!')
        }
    })
}





// export default converterPromise;
export default converterPromise;
