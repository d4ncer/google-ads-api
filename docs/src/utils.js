export const getSectionId = node => {
    const { title } = node.frontmatter
    return title
        .split(' ')
        .join('-')
        .toLowerCase()
}

export const getIds = edges => {
    const ids = {}
    edges.forEach(edge => {
        const { node } = edge
        const { entity, order, title, type } = node.frontmatter

        if (!ids[entity]) {
            ids[entity] = {}
        }
        ids[entity][order] = {
            title,
            type,
            entity,
            id: getSectionId(node),
        }
    })
    return ids
}

export const getSectionsData = edges => {
    return edges.map(edge => {
        const { node } = edge

        const section_data = {
            id: getSectionId(node),
            key: edge.node.id,
            node,
        }

        section_data.is_index = node.fields.is_index

        if (section_data.is_index) {
            const meta_file = require(`../content/${node.fields.directory}/meta.js`)
            section_data.meta = meta_file.object

        }

        return section_data
    })
}

export const toggleVisible = (id) => {
    const element = document.getElementById(id)
    if (element) {
        if (element.style.display === 'none') {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    }

}