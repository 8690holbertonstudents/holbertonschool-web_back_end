#!/usr/bin/env python3
"""
Module to use MongoDB with python
"""


def list_all(mongo_collection):
    """
    """
    list = []
    for doc in mongo_collection.find():
        list.append(doc)
    return list
