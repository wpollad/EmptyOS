const calendar = document.getElementById("calendar");

let date = new Date();

createCalendar(calendar, date.getFullYear(), date.getMonth() + 1, date.getDate());

function createCalendar(elem, year, month, today){
    let mon = month - 1;
    let d = new Date(year, mon);
    const dayInMon = 32 - new Date(year, mon, 32).getDate();
    console.log(dayInMon);

    let table = `
    <table>
        <tr>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
        </tr>
        <tr>
    `;

    for (let i = 0; i < getDay(d); i++){
        table += `<td></td>` 
    }

    while (d.getMonth() === mon){
        if (d.getDate() !== today){
            table += `<td>` + d.getDate() + `</td>`;
        } else {
            table += `<td id="today">` + d.getDate() + `</td>`;
        }
        

        if ((getDay(d) % 7 === 6) && (d.getDate() !== dayInMon)){
            table += `<tr></tr>`
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

    table += `</table>`

    elem.innerHTML = table;

    function getDay(date){
        let day = date.getDay();
        if (day === 0) day = 7;
        return day - 1;
    }


}
