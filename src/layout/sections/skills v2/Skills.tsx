// @flow 
import htmlIcon from './../../../assets/icons/html_svg.svg'
import cssIcon from './../../../assets/icons/css_svg.svg'
import jsIcon from './../../../assets/icons/js_svg.svg'
import tsIcon from './../../../assets/icons/typescript_svg.svg'
import reduxIcon from './../../../assets/icons/redux_svg.svg'
import reactIcon from './../../../assets/icons/react_svg.svg'
import wsIcon from './../../../assets/icons/webstorm_svg.svg'
import tlwndIcon from './../../../assets/icons/tailwind_svg.svg'
import sbIcon from './../../../assets/icons/storybook_svg.svg'
import gitIcon from './../../../assets/icons/git_svg.svg'
import gitHubIcon from './../../../assets/icons/github_svg.svg'
import mUiIcon from './../../../assets/icons/material-ui_svg.svg'
import vsIcon from './../../../assets/icons/vs-code_svg.svg'
import scIcon from './../../../assets/icons/style-components_svg.svg'
import chGpt from './../../../assets/icons/chatgpt_svg.svg'

import {Skill} from "./Skill";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";


export type SkillsDataType = {
    altTitle: string,
    logo: string,
    title?:string
}

const skillsData: SkillsDataType[] = [
    {
        altTitle: 'html',
        logo: htmlIcon,
    },
    {
        altTitle: 'css',
        logo: cssIcon
    },
    {
        altTitle: 'js',
        logo: jsIcon
    },
    {
        altTitle: 'ts',
        logo: tsIcon
    },
    {
        altTitle: 'redux',
        logo: reduxIcon,
    },
    {
        altTitle: 'react',
        logo: reactIcon,
    },
    {
        altTitle: 'webstorm',
        logo: wsIcon
    },
    {
        altTitle: 'vsCode',
        logo: vsIcon
    },
    {
        altTitle: 'tailwind',
        logo: tlwndIcon
    },
    {
        altTitle: 'styled-components',
        logo: scIcon
    },
    {
        altTitle: 'material-ui',
        logo: mUiIcon
    },
    {
        altTitle: 'git',
        logo: gitIcon
    },
    {
        altTitle: 'git-hub',
        logo: gitHubIcon
    },
    {
        altTitle: 'storybook',
        logo: sbIcon
    },
    {
        altTitle:'chatgpt',
        logo:chGpt,
        title:'why not...xd'
    }


]

export const Skills = () => {
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap="wrap" gap={'40px'} justify={'center'}>
                {skillsData.map(el => {
                    return <Skill altTitle={el.altTitle} logo={el.logo} title={el.title}/>
                })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    //background-color:red
    position:relative;

`