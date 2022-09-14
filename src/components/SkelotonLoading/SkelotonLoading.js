import Skeleton from 'react-loading-skeleton';

export const LoadingHome = () => {
    return (
        <div className="height-100vh overflow-hidden">
            <Skeleton height={60}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={300}></Skeleton>
                <Skeleton
                    height={220}
                    width={500}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
            <Skeleton height={60}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={300}></Skeleton>
                <Skeleton
                    height={220}
                    width={500}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
            <Skeleton height={60}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={300}></Skeleton>
                <Skeleton
                    height={220}
                    width={500}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
            <Skeleton height={60} className="mt-4"></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={300}></Skeleton>
                <Skeleton
                    height={220}
                    width={500}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
        </div>
    );
};

export const SkeLotonSlider = () => {
    return (
        <>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
        </>
    );
};

export const SkelotonFollow = () => (
    <div className="d-flex justify-content-between align-items-center overflow-hidden">
        <Skeleton height={330} className="mx-2 d-block max-w-100" width={260}></Skeleton>
        <Skeleton height={330} className="mx-2 d-block max-w-100" width={260}></Skeleton>
        <Skeleton height={330} className="mx-2 d-block max-w-100" width={260}></Skeleton>
    </div>
);
