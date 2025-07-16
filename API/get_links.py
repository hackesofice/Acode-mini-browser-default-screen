import requests
import json
import os
import re

class yt_handler:
    @staticmethod
    def fetch_data(fileURL):
        textFILE = requests.get(fileURL).text
        totalVideos = len(textFILE)
        return textFILE, totalVideos
    
    