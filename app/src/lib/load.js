
//ES6 export
export function load(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function(event){
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(this.status)
                }
            }
        }
        xhr.open('GET', url)
        xhr.send();
    })
}




