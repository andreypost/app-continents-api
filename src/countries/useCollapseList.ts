export const useCollapseList = {
    firstList(e: {target: any}) {
        for (const ul of e.target.parentNode.querySelectorAll('.firstList')) {
            ul.classList.toggle('none')
        }
    },
    secondList(e: {target: any}) {
        for (const ul of e.target.parentNode.querySelectorAll('.secondList')) {
            ul.classList.toggle('none')
        }
    },
    closeTree(e: {target: any}) {
        for (const ul of e.target.closest('.list').querySelectorAll('ul')) {
            ul.classList.add('none')
        }
    }
}