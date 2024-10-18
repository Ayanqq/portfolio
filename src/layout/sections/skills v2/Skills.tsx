// @flow 
import htmlIcon from './../../../assets/icons/html_svg.svg'
import cssIcon from './../../../assets/icons/css_svg.svg'
import jsIcon from './../../../assets/icons/js_svg.svg'
import tsIcon from './../../../assets/icons/ts_svg.svg'
import reduxIcon from './../../../assets/icons/redux_svg.svg'
import reactIcon from './../../../assets/icons/react_svg.svg'


type SkillsDataType = {
    altTitle: string,
    logo: string
}

const skillsData:SkillsDataType[] = [
    {
        altTitle: 'html',
        logo: htmlIcon,
    },
    {
        altTitle:'css',
        logo:cssIcon
    },
    {
        altTitle:'js',
        logo:jsIcon
    },
    {
        altTitle:'ts',
        logo:tsIcon
    },
    {
        altTitle:'redux',
        logo:reduxIcon,
    },
    {
        altTitle:'react',
        logo:reactIcon,
    }


]

export const Skills = () => {
    return (
        <div>
            {skillsData.map(el => {
                return el.logo
            })}
        </div>
    );
};