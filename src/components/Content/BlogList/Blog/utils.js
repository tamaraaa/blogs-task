export const formatDate = date => {
    let dateStr = new Date(date);
    let dd = String(dateStr.getDate()).padStart(2, '0');
    let mm = String(dateStr.getMonth() + 1).padStart(2, '0'); 
    let yyyy = dateStr.getFullYear();
    dateStr = `${dd}.${mm}.${yyyy}`;

    let hr = new Date(date).getHours();
    let min = new Date(date).getMinutes();
    let timeStr = `${hr}:${min}`;
    return {
        date: dateStr,
        time: timeStr
    };
};
