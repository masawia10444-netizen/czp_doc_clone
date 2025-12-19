# Authentication
ก่อนเรียก API ที่เกี่ยวข้อง คุณจำเป็นต้องเรียก API Authentication ก่อน เพื่อรับ Authorization Token เพื่อนำไปใช้ในการเรียก API ตัวอื่นต่อไป


<!-- tabs:start -->
#### **Request Url**
```api
GET https://api.egov.go.th/ws/auth/validate?ConsumerSecret={{ConsumerSecret}}&AgentID={{AgentID}}
```

#### **Description**

| | Name | Type | Description | Required |
| --- | ------------ | --- | ------------ | --- |
| 1. | Consumer-Key | String | ได้จากการลงทะเบียน 	 | Required |
| 2. | AgentID | String | ใช้ mToken ที่ถูกส่งเข้ามาใน landing url หรือ SessionID, หรือ UserID ของผู้ใช้ เพื่อใช้ tracking เคส ที่อาจจะเกิดขึ้น| Required |

<!-- tabs:end -->


<!-- tabs:start -->
#### **Header**
```js
Consumer-Key: {{Consumer-Key}}
Content-Type: application/json
```
#### **Description**

| | Name | Type | Description | Required |
| --- | ------------ | --- | ------------ | --- |
| 1. | ConsumerSecret | String | ได้จากการลงทะเบียน 	 | Required |
| 2. | Content-Type | String | application/json	 	 | Required |

<!-- tabs:end -->

<!-- tabs:start -->
#### **Response**
**200: OK**
Stats successfully retrieved.
```js
{ "Result": "a1df069f-b3ee-41b6-98ba-d1a3383dacaf" }
```
#### **Description**

| | Name | Type | Description | 
| --- | ------------ | --- | ------------ | 
| 1. | Result | String | Access Token สำหรับใช้ในการเรียก API อื่นๆ 	 |
<!-- tabs:end -->




