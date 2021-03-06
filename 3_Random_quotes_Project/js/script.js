

let autorArr = [
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "-Eleanor Roosevelt" },
    { text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "-Steve Jobs" },
    { text: "The way to get started is to quit talking and begin doing.", author: "-Walt Disney" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "-Nelson Mandela" },
    { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author:"-Benjamin Franklin"},
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author:"-Helen Keller"},
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author:" -Ralph Waldo Emerson"},
    { text: "It is during our darkest moments that we must focus to see the light.", author:"-Aristotle"},
    { text: "The future belongs to those who believe in the beauty of their dreams.", author:"-Eleanor Roosevelt"},
    { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author:"-Robert Louis Stevenson"},
    { text: "When you reach the end of your rope, tie a knot in it and hang on.", author:"-Franklin D. Roosevelt"}

]

let author=document.querySelector('.content_author_inner'),text=document.querySelector('#text');


let buton=document.querySelector('#button').addEventListener('click',()=>{
    let numRandom=Math.floor(Math.random() * 11);
    author.innerHTML=autorArr[numRandom].author;
    text.innerHTML=autorArr[numRandom].text;
});