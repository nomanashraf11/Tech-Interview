import { FC } from "react";
import { HomePageProps } from "./types";
import * as Styled from "./styled";
import { CiBellOn } from "react-icons/ci";
import { useTheme } from "@emotion/react";
import { FaAngleDown } from "react-icons/fa6";
import Box from "../../components/box";

export * from "./types";

/*
 Feel free to change this page however you wish
 You can divide this page into smaller components if you wish to

*/
const boxesData = [
  { title: "Box 1", component: "Content for Box 1" },
  { title: "Box 2", component: "Content for Box 2" },
  { title: "Box 3", component: "Content for Box 3" },
  { title: "Box 4", component: "Content for Box 4" },
];

export const HomePage: FC<HomePageProps> = (props) => {
  const { profile } = props;
  const theme = useTheme();

  return (
    <Styled.PageWrapper>
      <Styled.HeaderContainer>
        <Styled.titleWrap>
          <Styled.Title>My Tipaw</Styled.Title>
        </Styled.titleWrap>
        <Styled.HeaderContainerSecond>
          <Styled.titleWrap>
            <Styled.TextHeader>Fr</Styled.TextHeader>
            <Styled.Dot></Styled.Dot>
            <Styled.TextHeaderSecond>Nl</Styled.TextHeaderSecond>
          </Styled.titleWrap>

          <CiBellOn style={{ width: "24px", height: "24px" }} />
          <img
            src={profile.avatar}
            style={{ width: "40px", height: "40px", borderRadius: "100px" }}
            alt="some guy with a dog"
          />
          {profile.name}
          <FaAngleDown
            style={{ width: "24px", height: "24px", borderRadius: "100px" }}
          />
        </Styled.HeaderContainerSecond>
      </Styled.HeaderContainer>
      <Styled.ProfileSetDiv>
        <Styled.InnerDiv>
          <Styled.InnerDivFirst>
            <p
              style={{ color: "#5ACEE8", fontSize: "18px", fontWeight: "600" }}
            >
              You successfully complete your profile at Tipaw
            </p>
            <p style={{ fontWeight: 400, fontSize: 14, marginTop: "16px" }}>
              Now you can use Tipaw for 100% 🎉
            </p>
          </Styled.InnerDivFirst>
          <Styled.InnerDivSecond>
            <Styled.TwoPara>
              <p style={{ fontWeight: 600, fontSize: "18px" }}>
                Profile completed
              </p>
              <p
                style={{
                  color: "#03C9A9",
                  fontSize: "14px",
                  fontWeight: "700px",
                }}
              >
                100%
              </p>
            </Styled.TwoPara>
            <Styled.Row>
              {new Array(5).fill(null).map((_, index) => (
                <Styled.Bar key={index}></Styled.Bar> // Add a unique key prop
              ))}
            </Styled.Row>
          </Styled.InnerDivSecond>
        </Styled.InnerDiv>

        <Styled.InnerDiv2>
          {boxesData.map((element) => {
            return <Box title={element.title} component={element.component} />;
          })}
        </Styled.InnerDiv2>
      </Styled.ProfileSetDiv>{" "}
      <Styled.ProfileSetDiv>
        <Styled.InnerDiv>
          <Styled.InnerDivFirst>
            <p
              style={{ color: "#5ACEE8", fontSize: "18px", fontWeight: "600" }}
            >
              Announcements from Tipaw
            </p>
          </Styled.InnerDivFirst>
        </Styled.InnerDiv>
        <Styled.Last>
          <div
            style={{
              border: "1px solid #5acee8",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              padding: "12px",
              backgroundColor: "#5acee8",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              Last
            </p>
            <FaAngleDown
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "100px",
                color: "white",
              }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Etiam sed non id ultrices
            tempor. Consectetur pharetra lorem vivamus eros bibendum. Sit augue
            adipiscing adipiscing est massa non neque pretium metus. Consequat
            posuere nullam eleifend viverra pellentesque sed quis. Nunc non
            aenean leo lacinia etiam enim. Turpis gravida in ornare habitant
            volutpat. Imperdiet est ut et magna amet tortor tortor. Pulvinar
            suspendisse volutpat gravida placerat posuere feugiat erat ut.
            Aliquam facilisis ornare egestas mi. Molestie mauris aliquet dolor
            accumsan malesuada nam ac enim. Praesent ut elit aliquam nunc.
          </p>
        </Styled.Last>
      </Styled.ProfileSetDiv>
    </Styled.PageWrapper>
  );
};
