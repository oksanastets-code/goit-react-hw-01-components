import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 40px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Description = styled.div`
  text-align: center;
  padding: 10px;
`;
export const Avatar = styled.img`
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 1px solid gray;
`;
export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 15px;
  color: #212121;
`;
export const Tag = styled.p`
  font-weight: 500;
  color: #757575;
  margin-bottom: 15px;
`;
export const Location = Tag.withComponent('p');

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f4fa;
  text-decoration: none;
`;
export const Label = styled.span`
  margin-top: 15px;
  margin-bottom: 8px;
  display: block;
  font-weight: 500;
  color: #757575;
  text-align: center;
`;
export const Quantity = styled.span`
  margin-bottom: 15px;
  display: block;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #212121;
  text-align: center;
`;
export const Item = styled.li`
  flex-basis: calc((100%) / 3);
  border: 1px solid #eeebeb;
`;
