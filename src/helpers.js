export const checkBudget = (budget, remaining) => {
    let styleClass;

    if((budget / 4) > remaining){
        styleClass= 'alert alert-danger'
    } else if ((budget / 2) > remaining){
        styleClass = 'alert alert-warning'
    } else {
        styleClass = 'alert alert-success'
    }

    return styleClass
}