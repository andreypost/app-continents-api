export const useCollapseList = {
    openTree(e: {target: any}, list) {
        for (const ul of e.target.parentNode.querySelectorAll(list)) {
            ul.classList.toggle('none')
        }
    },
    closeTree(e: {target: any}, tree, nodes, setListState) {
        for (const ul of e.target.closest(tree).querySelectorAll(nodes)) {
            ul.classList.add('none')
        }
        setListState('none')
    }
}