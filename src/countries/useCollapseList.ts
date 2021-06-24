export const useCollapseList = {
    openTree(e: {target: any}, tree) {
        for (const ul of e.target.parentNode.querySelectorAll(tree)) {
            ul.classList.toggle('none')
        }
    },
    closeTree(e: {target: any}, list, nodes, setListState) {
        for (const ul of e.target.closest(list).querySelectorAll(nodes)) {
            ul.classList.add('none')
        }
        setListState('none')
    }
}