from rest_framework import serializers
from core.models import User, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        if 'profile' in validated_data.keys():
            profile_data = validated_data.pop('profile')
        else:
            profile_data = {}
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        # user와 동시에 profile 데이터 생성해주기
        UserProfile.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.sex = profile_data.get('sex', profile.sex)
        profile.dob = profile_data.get('dob', profile.dob)
        profile.phone = profile_data.get('phone', profile.phone)
        profile.address = profile_data.get('address', profile.address)
        profile.pictures = profile_data.get('pictures', profile.pictures)
        profile.is_teacher = profile_data.get('is_teacher', profile.is_teacher)
        profile.save()

        return instance
