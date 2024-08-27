from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extrafields):
        if not email:
            raise ValueError("User must have an email")
        email = self.normalize_email(email)
        user = self.model(email=email, **extrafields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extrafields):
        extrafields.setdefault('is_active', True)
        extrafields.setdefault('is_staff', True)
        extrafields.setdefault('is_superuser', True)
        if extrafields.get('is_active') is not True:
            raise ValueError('Super user must be active')
        if extrafields.get('is_staff') is not True:
            raise ValueError('Super user must be staff')
        if extrafields.get('is_superuser') is not True:
            raise ValueError('Super user must have is_superuser= True')
        return self.create_user(email, password, **extrafields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=80)
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def get_short_name(self):
        return self.first_name

    def __str__(self) -> str:
        return self.email
