#!/usr/bin/env python3
"""
Module to use MongoDB with python
"""


def update_topics(mongo_collection, name, topics):
    """
    Function that that changes all topics of a school document based on the name
    """
    update_doc = mongo_collection.update_many(
        {"name": name}, {"$set": {"topics": topics}})
    return update_doc
