import styled from 'styled-components'

// nav 

export const MYNav=styled.div`
   height:130px;
   display:flex;
   align-items:center;
   flex-direction:column;
`
export const Firstnav=styled.div`
    height:80px;
    .col{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    input{
        background-color:#0191b4;
        border:none;
        height:40px;
        border-radius:5px;
        color:#fff;
        outline:none;
        padding-left:10px;
        @media (max-width:800px)  {
            width:200px
        }
    }
    .fa-magnifying-glass{
        position:absolute;
        right:10px;
        top:12px;
    }
    .searchdiv{
        position:relative !important;
    }
`
export const Logo=styled.div`
  display:flex;
  align-items:center;
  img{
    width:80px;
  }
  h3{
    color:#0191b4;
  }
`
export const Accoutns=styled.div`
    color:#645d5d;
    width:120px;
`
export const Login=styled.div`
    height:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    a{
        text-decoration:none;
        color:#5a5050;
    }
`
export const Icons=styled.div`
    a{
        text-decoration:none;
        color:#5a5050;
        font-size:24px;
        margin-right:12px
    }
`
export const Secondnav=styled.div`
    height:70px;
    width:100%;
    background-color:#0191b4;
    color:#fff;
`