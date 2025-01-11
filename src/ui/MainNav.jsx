import styled from 'styled-components'


import NavItem from "./NavItem"


const StyledMainNav = styled.div`
`
export default function MainNav() {
    const arr = ["Cooking", "Dev", "Fitness", "Health", "Personal", "React", "Recipe", "Shopping", "Travel", "TypeScript"]
  return (
    <StyledMainNav>
        <div>
            <p>Tags</p>
           <ul>
            {arr.map(item=>

            <NavItem item={item} key={item}/>
            )}
           </ul>
        </div>
    </StyledMainNav>
  )
}
