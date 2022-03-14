import requests
from datetime import datetime
from functools import partial

API_URL = "http://localhost:3000/api"


def PrefixUrlSession(prefix=None):
    if prefix is None:
        prefix = ""
    else:
        prefix = prefix.rstrip("/")

    def new_request(prefix, f, method, url, *args, **kwargs):
        return f(method, prefix + url, *args, **kwargs)

    s = requests.Session()
    s.request = partial(new_request, prefix, s.request)
    return s


session = PrefixUrlSession(API_URL)
assert session.get("/user").json()["error"]
assert session.get("/user?name=").json()["status"] == "error"
assert session.get("/user?name=saiodj").json()["status"] == "error"

assert session.post("/user").json()["error"]
assert session.post("/user", json={}).json()["error"]
assert session.post("/user", json={"name": ""}).json()["status"] == "error"
assert session.post("/user", json={"name": "user1"}).json()["status"] == "success"

assert session.get("/user?name=user1").json()["status"] == "success"

assert len(session.get("/activities?name=user1").json()["data"]) == 0

assert session.post("/activities").json()["error"]
assert session.post("/activities", json={}).json()["error"]
assert session.post(
    "/activities",
    json={
        "activity_name": "Activity #1",
        "end_date": datetime.now().isoformat("T"),
    },
).json()["error"]
assert session.post(
    "/activities",
    json={
        "user_id": "user1",
        "end_date": datetime.now().isoformat("T"),
    },
).json()["error"]
assert session.post(
    "/activities",
    json={
        "user_id": "user1",
        "activity_name": "Activity #1",
    },
).json()["error"]
assert (
    session.post(
        "/activities",
        json={
            "user_id": "empty",
            "activity_name": "Activity #1",
            "end_date": datetime.now().isoformat("T"),
        },
    ).json()["status"]
    == "error"
)
assert (
    session.post(
        "/activities",
        json={
            "user_id": "user1",
            "activity_name": "Activity #1",
            "end_date": datetime.now().isoformat("T"),
        },
    ).json()["status"]
    == "success"
)
assert (
    session.post(
        "/activities",
        json={
            "user_id": "user1",
            "activity_name": "Activity #1",
            "end_date": "AWOOGA" + datetime.now().isoformat("T"),
        },
    ).json()["status"]
    == "error"
)

assert session.get("/activities").json()["error"]
assert session.get("/activities?name=").json()["status"] == "error"
assert session.get("/activities?name=saiodj").json()["status"] == "error"
assert session.get("/activities?name=user1").json()["status"] == "success"
assert len(session.get("/activities?name=user1").json()["data"]) == 1
