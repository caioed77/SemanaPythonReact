from django.forms import ValidationError
from rest_framework import serializers
from teacher.models import Professor, Aula

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor   
        fields = '__all__'
        
class CadatrasAulaSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    nome = serializers.CharField(max_length=100)
    
    
    def Validate_nome(self, value):
        if len(value) < 3:
            raise ValidationError("deve ter pelo menos três caracteres")
        return value
            
    
class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'