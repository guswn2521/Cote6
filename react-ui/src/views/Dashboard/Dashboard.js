// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Portal,
    Progress,
    SimpleGrid,
    Spacer,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { SiJavascript, SiGoogle } from "react-icons/si";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    RocketIcon,
    StatsIcon,
    WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";

export default function Dashboard() {
    const defaultState = {
        popular: true,
        solving: false,
    };

    const [whatIsOpen, setWhatIsOpen] = useState(defaultState);
    console.log(whatIsOpen);

    const value = "$100.000";
    // Chakra Color Mode
    const { colorMode, toggleColorMode } = useColorMode();
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("#4FD1C5", "#4FD1C5");
    const textColor = useColorModeValue("gray.700", "white");
    const [series, setSeries] = useState([
        {
            type: "area",
            name: "Mobile apps",
            data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
        },
        {
            type: "area",
            name: "Websites",
            data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
        },
    ]);
    const overlayRef = React.useRef();

    return (
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} spacing="24px">
                <Card minH="83px" overflowX={{ sm: "scroll", xl: "hidden" }}>
                    <CardBody
                        onClick={() => setWhatIsOpen(defaultState)}
                        style={{ cursor: "pointer" }}
                    >
                        <Flex
                            flexDirection="column"
                            align="flex-start"
                            justify="center"
                            w="100%"
                        >
                            <Flex
                                flexDirection="row"
                                align="center"
                                justify="center"
                                w="100%"
                            >
                                <Stat me="auto">
                                    <StatLabel
                                        fontSize="xl"
                                        fontWeight="bold"
                                        pb=".1rem"
                                    >
                                        Most popular technologies
                                    </StatLabel>
                                </Stat>
                                <div
                                    style={{
                                        paddingTop: "8px",
                                        marginTop: "6px",
                                    }}
                                >
                                    <SiJavascript
                                        h={"50px"}
                                        w={"50px"}
                                        size="60"
                                        color={iconBoxInside}
                                    />
                                </div>
                            </Flex>
                            <Button p="0px" variant="no-hover" bg="transparent">
                                <Text
                                    fontSize="sm"
                                    fontWeight="bold"
                                    color="gray.400"
                                    _hover={{ me: "4px" }}
                                    transition="all .5s ease"
                                >
                                    Click!
                                </Text>
                                <Icon
                                    as={BsArrowRight}
                                    w="20px"
                                    h="20px"
                                    fontSize="xl"
                                    transition="all .5s ease"
                                    mx=".3rem"
                                    color="gray.400"
                                    cursor="pointer"
                                    _hover={{
                                        transform: "translateX(20%)",
                                    }}
                                    pt="4px"
                                />
                            </Button>
                        </Flex>
                    </CardBody>
                </Card>
                <Card minH="83px" overflowX={{ sm: "scroll", xl: "hidden" }}>
                    <CardBody
                        onClick={() =>
                            setWhatIsOpen({
                                popular: false,
                                solving: true,
                            })
                        }
                        style={{ cursor: "pointer" }}
                    >
                        <Flex
                            flexDirection="column"
                            align="flex-start"
                            justify="center"
                            w="100%"
                        >
                            <Flex
                                flexDirection="row"
                                align="center"
                                justify="center"
                                w="100%"
                            >
                                <Stat me="auto">
                                    <StatLabel
                                        fontSize="xl"
                                        fontWeight="bold"
                                        pb=".1rem"
                                    >
                                        Learning & problem solving
                                    </StatLabel>
                                </Stat>
                                <div
                                    style={{
                                        paddingTop: "10px",
                                        marginTop: "7px",
                                    }}
                                >
                                    <SiGoogle
                                        h={"35px"}
                                        w={"35px"}
                                        size="50"
                                        color={iconBoxInside}
                                    />
                                </div>
                            </Flex>
                            <Button p="0px" variant="no-hover" bg="transparent">
                                <Text
                                    fontSize="sm"
                                    fontWeight="bold"
                                    color="gray.400"
                                    _hover={{ me: "4px" }}
                                    transition="all .5s ease"
                                >
                                    Click!
                                </Text>
                                <Icon
                                    as={BsArrowRight}
                                    w="20px"
                                    h="20px"
                                    fontSize="xl"
                                    transition="all .5s ease"
                                    mx=".3rem"
                                    color="gray.400"
                                    cursor="pointer"
                                    _hover={{
                                        transform: "translateX(20%)",
                                    }}
                                    pt="4px"
                                />
                            </Button>
                        </Flex>
                    </CardBody>
                </Card>
            </SimpleGrid>
            {whatIsOpen.popular && (
                <SimpleGrid
                    columns={{ sm: 1, md: 1, xl: 1 }}
                    spacing="24px"
                    my="15px"
                    height="auto"
                >
                    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
                        <CardBody>
                            <Flex
                                direction="column"
                                w="100%"
                                alignSelf="center"
                                height="auto"
                            >
                                <Text
                                    fontSize="30px"
                                    color={textColor}
                                    fontWeight="bold"
                                    mb="15px"
                                >
                                    Programming, scripting, and markup languages
                                </Text>
                                <Text
                                    fontSize="lg"
                                    fontWeight="medium"
                                    color={textColor}
                                    as="span"
                                    m="10px 0 15px 10px"
                                >
                                    2021년 웹 프로그래밍 언어 조사 결과,
                                    <br />
                                    <b>JavaScript</b> 가 응답자 중{" "}
                                    <b>70.07%로 가장 많았습니다.</b> 그 뒤로는{" "}
                                    <b>HTML/CSS가 60.42%</b>로 많습니다. <br />
                                    이를 바탕으로 추론해보면, 개발자들은
                                    기본적으로 위 언어들을 먼저 시작하는것으로
                                    예상해볼 수 있습니다.
                                    <br />
                                    <br /> 직관적인 언어로 잘 알려진{" "}
                                    <b>Python, SQL</b> 이 3, 4위 비슷한 비율로
                                    차지하고 있습니다.
                                </Text>
                                <BarChart />
                            </Flex>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            )}
            {whatIsOpen.solving && (
                <SimpleGrid
                    columns={{ sm: 1, md: 1, xl: 1 }}
                    spacing="24px"
                    my="15px"
                    height="auto"
                >
                    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
                        <CardBody>
                            <Flex
                                direction="column"
                                w="100%"
                                alignSelf="center"
                                height="auto"
                            >
                                <Text
                                    fontSize="30px"
                                    color={textColor}
                                    fontWeight="bold"
                                    mb="15px"
                                >
                                    What do you do when you get stuck
                                </Text>
                                <Text
                                    fontSize="lg"
                                    fontWeight="medium"
                                    color={textColor}
                                    as="span"
                                    m="10px 0 15px 10px"
                                >
                                    많은 개발자들이 문제를 마주쳤을 때, Google과
                                    Stack Overflow를 이용한다고 합니다.
                                    <br /> 이외에도 쉬었다가 다시 한다던지,
                                    동료에게 도움을 요청하는 등 다양한 방법들이
                                    있습니다.
                                    <br /> <br />
                                    여러분은 문제에 어떤 방식으로 대처하나요?
                                </Text>
                                {/* <BarChart /> */}
                            </Flex>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            )}
        </Flex>
    );
}
