import { GoBackPage, Button } from './ComeBackBtn-styled';

const ComeBack = ( refLocation ) => {

    const btnBack = refLocation.current ?? '/';

    return (
        <GoBackPage to={btnBack}>
<Button>
Come back
</Button>
</GoBackPage>
    )
};

export default ComeBack;