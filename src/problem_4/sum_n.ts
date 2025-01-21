function sum_to_n_a(n: number): number {
    return n*(n+1)/2;
}

function sum_to_n_b(n: number): number {
    let total = 0;
    if(n % 2 != 0){
        const mid = Math.ceil(n/2);
        total = n*mid;
    }
    else {
        const mid = Math.floor(n/2);
        total = n*mid + mid;
    }

    return total;
}

function sum_to_n_c(n: number): number {
    return (n * (n + 1)) >> 1;
}


console.log("\n========================== sum_to_n_a ==============================\n")
console.log(sum_to_n_a(0));
console.log(sum_to_n_a(1));
console.log(sum_to_n_a(2));
console.log(sum_to_n_a(3));
console.log(sum_to_n_a(4));
console.log(sum_to_n_a(5));
console.log(sum_to_n_a(6));
console.log(sum_to_n_a(7));
console.log(sum_to_n_a(8));
console.log(sum_to_n_a(9));
console.log(sum_to_n_a(10));

console.log("\n========================== sum_to_n_b ==============================\n")
console.log(sum_to_n_b(0));
console.log(sum_to_n_b(1));
console.log(sum_to_n_b(2));
console.log(sum_to_n_b(3));
console.log(sum_to_n_b(4));
console.log(sum_to_n_b(5));
console.log(sum_to_n_b(6));
console.log(sum_to_n_b(7));
console.log(sum_to_n_b(8));
console.log(sum_to_n_b(9));
console.log(sum_to_n_b(10));

console.log("\n========================== sum_to_n_c ==============================")
console.log(sum_to_n_c(0));
console.log(sum_to_n_c(1));
console.log(sum_to_n_c(2));
console.log(sum_to_n_c(3));
console.log(sum_to_n_c(4));
console.log(sum_to_n_c(5));
console.log(sum_to_n_c(6));
console.log(sum_to_n_c(7));
console.log(sum_to_n_c(8));
console.log(sum_to_n_c(9));
console.log(sum_to_n_c(10));