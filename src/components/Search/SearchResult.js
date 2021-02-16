import useAsync from "../hooks/useAsync";
import getPlace from "../api/getPlace";
import { Pagination, Card, Row, Col } from "antd";

const searchResult = ({ page, mapX, mapY, radius, contentId }) => {
  const { Meta } = Card;
  const [state] = useAsync(() => getPlace(page, mapX, mapY, radius), [
    contentId,
  ]);
  const { loading, data: items, error } = state;

  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;
  if (!user) return null;

  return (
    <Row gutter={[12, 12]}>
      {items.map((item) => {
        if (!item.firstImageUrl) {
          item.firstImageUrl = `https://bit.ly/3rYGoxK`;
        }
        return (
          <Col sm={24} xl={12}>
            <Card
              hoverable
              key={item.contentId}
              style={{ width: 300 }}
              cover={<img alt="example" src={item.firstImageUrl} />}
            >
              <Meta title={item.facltNm} description={item.lineIntro} />
            </Card>
          </Col>
        );
      })}
      <Pagination size="small" total={12} />
    </Row>
  );
};
