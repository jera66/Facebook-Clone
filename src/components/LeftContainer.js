import { Avatar } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const data = [
    {
        'id':1,
        'img':'https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/321077647_899967248097637_1475678612894723587_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ien90SL6ij0AX9TICHR&_nc_ht=scontent-bos5-1.xx&oh=00_AfBbCpGYcrstPnlvWiBrXaJIc2w7A57jeiql7qH-TvcqOg&oe=63B11C6D',
        'title': 'Jerathel Jean'
    },
    {
        'id':2,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png',
        'title': 'COVID-19 Information Center'
    },
    {
        'id':3,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
        'title': 'Friends'
    },
    {
        'id':4,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
        'title': 'Groups'
    },
    {
        'id':5,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png',
        'title': 'Marketplace'
    },
    {
        'id':6,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png',
        'title': 'Watch'
    },
    {
        'id':7,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png',
        'title': 'Events'
    },
    {
        'id':8,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png',
        'title': 'Memories'
    },
    {
        'id':9,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png',
        'title': 'Saved'
    },
    {
        'id':10,
        'img':'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png',
        'title': 'Pages'
    },
]

function LeftContainer() {
    return (
        <Container>
            <SubList>

                {
                    data.map((item) => (
                        <List>
                            <Avatar src={item.img}/>
                            <p>{item.title}</p>
                        </List>

                    ))
                }

                <List>
                    <ArrowDropDown />
                    <p>See More</p>
                </List>

                
            </SubList>
        </Container>
    )
}

export default LeftContainer

const Container = styled.div`
    flex: 0.25;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
        width: 8px;
      }

    :hover {
        transition: ease-in 0.4s;


        ::-webkit-scrollbar {
            display: flex;
            width: 8px;
          }
          
        
        ::-webkit-scrollbar-track {
            background: white;
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: rgb(136, 136, 136);
            border-radius: 10px;
          }
        
        ::-webkit-scrollbar-thumb:hover {
            background: rgb(126, 126, 126);
            border-radius: 10px;
          }
        
        ::-webkit-scrollbar-thumb:active {
            background: rgb(126, 126, 126);
            border-radius: 10px;
          }

    }

    @media(max-width: 1250px){
        display: none;
    }

    `
const SubList = styled.div`
    flex: 1;
    margin: 14px 10px;
`

const List = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    margin: 8px 0px;
    border-radius: 10px;
    cursor: pointer;

    p {
        margin-left: 14px;
    }

    :hover {
        background-color:  #68686880;
    }

    .MuiSvgIcon-root {
        padding: 6px;
        border-radius: 20px;
        background-color: #808080;
    }
`