import { Container,} from "@mantine/core";
import { Project1 } from "@/pages/Projects/Project1.page";
import { Project2 } from "@/pages/Projects/Project2.page";
import { Project3 } from "@/pages/Projects/Project3.page";
import { Project4 } from "@/pages/Projects/Project4.page";
import { Project5 } from "@/pages/Projects/Project5.page";
import { Project6 } from "@/pages/Projects/Project6.page";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function Project() {
    let {id} = useParams();
    let navigate = useNavigate();

    const renderProject = (id:string | undefined) => {
        switch (id) {
            case "1":
                return <Project1 />
            
            case "2":
                return <Project2 />

            case "3":
                return <Project3 />

            case "4":
                return <Project4 />

            case "5":
                return <Project5 />
                
            case "6":
                return <Project6 />

            default:
                return null;
        }
    }

    const projectComponent = renderProject(id);

    useEffect(() => {
        if (!projectComponent) {
            navigate("/");
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [projectComponent, navigate]);

    return (
        <Container fluid p={0}>
            {projectComponent}
        </Container>
    );
}
