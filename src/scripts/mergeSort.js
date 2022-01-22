export function merge(arr, l, m, r){

    var n1 = m-l+1;
    var n2 = r-m;

    var a1 = new Array(n1);
    var a2 = new Array(n2);

    for(let i = 0; i < n1; i++){
        a1[i] = arr[l + i];
    }
    for(let j = 0; j < n2; j++){
        a2[j] = arr[m + 1 + j];  
    }
    
    var i = 0;
    var j = 0;
    var k = l;

    while(i < n1 && j < n2){
        if(a1[i] <= a2[j]){
            arr[k] = a1[i];
            i++;
        }
        else{
            arr[k] = a2[j];
            j++;
        }
        k++;
    }

    while(i < n1){
        arr[k] = a1[i];
        i++;
        k++;
    }

    while(j < n2){
        arr[k] = a2[j];
        j++;
        k++;
    }

}


function mergeSort(arr,l,r){
    if(l>=r){
        return;
    }
    var m = l+parseInt((r-l)/2);
    mergeSort(arr,l, m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}
export default mergeSort;