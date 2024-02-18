import { GoBackPage, Button } from './ComeBackBtn-styled';

const ComeBack = ({ backLink }) => {

    return (
        <GoBackPage to={backLink}>
<Button>
Come back
</Button>
</GoBackPage>
    )
};

export default ComeBack;