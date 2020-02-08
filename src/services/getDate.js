export default function getDate(){
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    return `${format(day)}/${format(month)}/${year} ${format(hours)}:${format(minutes)}:${format(seconds)}`;

}

function format(val){
    return val.toString().length == 1 ? '0'+val : val;
}