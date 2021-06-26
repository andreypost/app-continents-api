export const useCollapseList = {
    openTree(e: {target: any}, list: string) {
        for (const ul of e.target.parentNode.querySelectorAll(list)) {
            ul.classList.toggle('none')
        }
    },
    closeTree(e: {target: any}, tree: string, nodes: string, setListState: any) {
        for (const ul of e.target.closest(tree).querySelectorAll(nodes)) {
            ul.classList.add('none')
        }
        setListState('none')
    }
}