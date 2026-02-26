from sqlalchemy.orm import Session
from app.models.user import User

class UserData:

    def __init__(self, db: Session):
        self.db = db

    def create_user(self, user: User):
        self.db.add(user)
        return user

    def read_user(self, user_id: int):
        return self.db.query(User).filter(User.id == user_id).first()

    def read_user_email(self, email: str):
        return self.db.query(User).filter(User.email == email).first()

    def update(self, user: User):
        return user

    def delete(self, user: User):
        self.db.delete(user)
        return user



