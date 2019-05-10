import React from 'react'

import { jumpTo } from '../../utils'

import SidebarSubsectionRows from './sidebarSubsectionRows'

const SidebarSectionRow = ({ sectionKey, sectionId, sectionName, isActive, currentSection, subsections }) => {
    return (
        <li className="mv0 pb2">
            <div className="relative">
                <div
                    className={
                        'indicator absolute top-0 left-0 h-100  ' + (isActive ? 'bg-opteo-link-blue' : 'bg-transparent')
                    }
                />
                <div
                    className={'entity pl3 pointer ' + (isActive ? 'active pt1 pb1 db' : '')}
                    onClick={() => jumpTo(sectionId)}
                >
                    {sectionName}
                </div>
            </div>
            <SidebarSubsectionRows id={sectionKey} subsections={subsections} currentSection={currentSection} />
        </li>
    )
}

export default SidebarSectionRow