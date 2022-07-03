export function sortByLevel(starters){
    starters.sort(function(a, b) {
        return parseFloat(a.level) - parseFloat(b.level);
    });
    console.log(starters);
}