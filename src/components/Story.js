import React from 'react'
import styled from 'styled-components'

function Story() {
    return (
        <Container>
           <List image='https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4'>
                <Profile src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/311008682_3318302831740445_1037243682323015151_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=U45AfIia0kUAX_21vHe&_nc_ht=scontent-bos5-1.xx&oh=00_AfA1jKqy6s-kHEtZ139emMjZ5a0nB4gZzu2g1CKf_Nv9Mg&oe=63B254B4" />
            </List>
            <List image='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'>
                <Profile src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/282615881_3207460179491378_303446661017587849_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=druBmEI5o9wAX_d49Ey&_nc_ht=scontent-bos5-1.xx&oh=00_AfC4wgeapkksbbQp0rjtTrl_HhzhPQgMY2mcEvPp2BOL3Q&oe=63B1071C" />
            </List>
            <List image='https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4'>
                <Profile src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/233671739_2989072721330126_3600636417651515706_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=yOrZpfmL2-sAX_gATK1&_nc_ht=scontent-bos5-1.xx&oh=00_AfBxR2cRi_zYqOGcAFdhwb0kt9qK2aRHFX6oejtVUnV2ig&oe=63B101A1" />
            </List>
            <List image='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'>
                <Profile src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/255531620_3065237880380276_3456720684029448416_n.png?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=KhmIqQkD4JoAX87voKG&_nc_ht=scontent-bos5-1.xx&oh=00_AfCKyZTft80ekuTBBNga3K38lohIy_Zr2Zu3HrxoWzr4hg&oe=63B1199F" />
            </List>
            <List image='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'>
                <Profile src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/242873566_3031409320429799_6374733632878194992_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=19026a&_nc_ohc=eVVSr_dtcI4AX8uqX2c&tn=B5cc9fOT9Rd91zZi&_nc_ht=scontent-bos5-1.xx&oh=00_AfC__cpuUN3JuInK61L68fcb37vY4O6Wf89p1CjVe9LVVA&oe=63B0AB48" />
            </List>
        </Container>
    )
}

export default Story

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const List = styled.div`
    display: flex;
    border-radius: 10px;
    width: 116px;
    height: 190px;
    background-color: white;
    margin: 0px 6px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;

    img {
        border-radius: 10px;
        width: inherit;
        height: inherit;
        object-fit: cover;
        // transform: scale(0.9);
    }

    :hover {
            -ms-transform: scale(1.05);
            -moz-transform: scale(1.05);
            -webkit-transform: scale(1.05);
            -o-transform: scale(1.05);
            transform: scale(1.05);
            transform: scale(1.05);
            transition: transform ease-in 0.2s;
    }

    @media(max-width: 1000px) {
        width: 100px;
        height: 160px;
    }

    @media(max-width: 580px) {
        width: 21vw;
        height: 20vh;
        
        :nth-child(n+5) {
            display: none;  
        }
    }
`

const Profile = styled.img`
    border-radius: 40px !important;
    margin: 14px 8px;
    width: 32px !important;
    height: 32px !important;
    border: 4px solid #2e89ff;
`