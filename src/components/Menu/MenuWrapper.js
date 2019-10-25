import styled from 'styled-components'
export const MenuWrapper = styled.div`
    background: #ffffff;
    border: solid 1px rgba(149, 149, 149, 0.4);
    width: 80px;
    text-align: center;
    color: #b8b8b8;
    height: 100%;
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    .menu {
        .list{
            padding: 10px 0px;
            height: 51px;
            padding-bottom: 18.3px;
            h1 {
                font-size: 8px;
            }
            a {
                color: #b8b8b8;
                text-decoration: none;
            }
            &:active,
            &:hover {
                position: relative;
                border-left: #575757 solid;
            }
        }
        .logo {
            padding: 10px 0px;
            height: 51px;
            padding-top: 20px;
            background: #575757;
        }
    }
`