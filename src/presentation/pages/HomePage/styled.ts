import styled from "@emotion/styled";

// Feel free to change / add / remove components however you wish

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0;

  padding: 0;
  justify-content: center;
  background-color: ${(props) => props.theme.color.light.background};
`;
export const ProgressItem = styled.div``;
export const Title = styled.p`
  font-size: 18px;
  flex-grow: 1;
  padding-left: 25px;
  font-weight: 600;
`;
export const TextHeader = styled.p`
  font-size: 14px;
  color: #5acee8;
  font-weight: 600;
`;

export const TextHeaderSecond = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: #5acee8;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
`;
export const titleWrap = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 12px 24px;
`;

export const HeaderContainerSecond = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
`;

export const HeaderContainerInner = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GlobalProgress = styled.div``;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//  CENTER DIV
export const ProfileSetDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  margin: 0 24px 0 24px;
  background-color: white;
`;
export const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  border-bottom: 1px solid #f0f0f0;
`;

export const InnerDivFirst = styled.div`
  flex: 3;
`;
export const InnerDivSecond = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const TwoPara = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bar = styled.div`
  height: 8px;
  background-color: #03c9a9;
  min-width: 90px;
  border-radius: 5px;
`;

export const Row = styled.div`
  gap: 2px;
  display: flex;
  margin: auto;
  margin-top: 24px;
`;

export const InnerDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  gap: 32px;
  flex-wrap: wrap;
`;

export const Last = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;
`;

export const LastInner = styled.div`
  display: flex;
  justify-content: space-between;
`;
