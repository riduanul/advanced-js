function stopWatch (){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());

কোন একটা ফাংশান থেকে আরেকটা ফাংশনকে কল করি অথবা রিটার্ন করি তাহলে সে একটা ক্লোজ এনভারমেন্ট তৈরী করে ভিতরের ফাংশনটা তার বাহিরেরর ভ্যরিয়েবল কে একসেস করতে পারে তখন সে তার নিজস্ব একটা ভ্যালো রাখে।
